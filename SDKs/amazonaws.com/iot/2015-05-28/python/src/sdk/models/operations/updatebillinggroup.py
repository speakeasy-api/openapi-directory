import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatebillinggroupresponse as shared_updatebillinggroupresponse


@dataclasses.dataclass
class UpdateBillingGroupPathParams:
    billing_group_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateBillingGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBillingGroupRequestBodyBillingGroupProperties:
    r"""UpdateBillingGroupRequestBodyBillingGroupProperties
    The properties of a billing group.
    """
    
    billing_group_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupDescription') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateBillingGroupRequestBody:
    billing_group_properties: UpdateBillingGroupRequestBodyBillingGroupProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingGroupProperties') }})
    expected_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedVersion') }})
    

@dataclasses.dataclass
class UpdateBillingGroupRequest:
    headers: UpdateBillingGroupHeaders = dataclasses.field()
    path_params: UpdateBillingGroupPathParams = dataclasses.field()
    request: UpdateBillingGroupRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateBillingGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_billing_group_response: Optional[shared_updatebillinggroupresponse.UpdateBillingGroupResponse] = dataclasses.field(default=None)
    version_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    
