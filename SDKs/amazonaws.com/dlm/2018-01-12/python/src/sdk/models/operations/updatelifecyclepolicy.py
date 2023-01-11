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


@dataclasses.dataclass
class UpdateLifecyclePolicyPathParams:
    policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'policyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateLifecyclePolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateLifecyclePolicyRequestBodyPolicyDetails:
    r"""UpdateLifecyclePolicyRequestBodyPolicyDetails
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
    
class UpdateLifecyclePolicyRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclasses.dataclass
class UpdateLifecyclePolicyRequestBody:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    execution_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    policy_details: Optional[UpdateLifecyclePolicyRequestBodyPolicyDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyDetails') }})
    state: Optional[UpdateLifecyclePolicyRequestBodyStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

@dataclasses.dataclass
class UpdateLifecyclePolicyRequest:
    headers: UpdateLifecyclePolicyHeaders = dataclasses.field()
    path_params: UpdateLifecyclePolicyPathParams = dataclasses.field()
    request: UpdateLifecyclePolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateLifecyclePolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_lifecycle_policy_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
