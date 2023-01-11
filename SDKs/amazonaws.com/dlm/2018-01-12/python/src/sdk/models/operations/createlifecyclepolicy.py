import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action
from ..shared import eventsource as shared_eventsource
from ..shared import parameters as shared_parameters
from ..shared import policytypevalues_enum as shared_policytypevalues_enum
from ..shared import resourcelocationvalues_enum as shared_resourcelocationvalues_enum
from ..shared import resourcetypevalues_enum as shared_resourcetypevalues_enum
from ..shared import schedule as shared_schedule
from ..shared import tag as shared_tag
from ..shared import createlifecyclepolicyresponse as shared_createlifecyclepolicyresponse


@dataclasses.dataclass
class CreateLifecyclePolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateLifecyclePolicyRequestBodyPolicyDetails:
    r"""CreateLifecyclePolicyRequestBodyPolicyDetails
    Specifies the configuration of a lifecycle policy.
    """
    
    actions: Optional[list[shared_action.Action]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    event_source: Optional[shared_eventsource.EventSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    parameters: Optional[shared_parameters.Parameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    policy_type: Optional[shared_policytypevalues_enum.PolicyTypeValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    resource_locations: Optional[list[shared_resourcelocationvalues_enum.ResourceLocationValuesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLocations') }})
    resource_types: Optional[list[shared_resourcetypevalues_enum.ResourceTypeValuesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypes') }})
    schedules: Optional[list[shared_schedule.Schedule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedules') }})
    target_tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTags') }})
    
class CreateLifecyclePolicyRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class CreateLifecyclePolicyRequestBody:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    execution_role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    policy_details: CreateLifecyclePolicyRequestBodyPolicyDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyDetails') }})
    state: CreateLifecyclePolicyRequestBodyStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclasses.dataclass
class CreateLifecyclePolicyRequest:
    headers: CreateLifecyclePolicyHeaders = dataclasses.field()
    request: CreateLifecyclePolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateLifecyclePolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_lifecycle_policy_response: Optional[shared_createlifecyclepolicyresponse.CreateLifecyclePolicyResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
