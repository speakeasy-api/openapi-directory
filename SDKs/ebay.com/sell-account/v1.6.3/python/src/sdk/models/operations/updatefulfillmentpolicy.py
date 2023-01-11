import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import fulfillmentpolicyrequest as shared_fulfillmentpolicyrequest
from ..shared import setfulfillmentpolicyresponse as shared_setfulfillmentpolicyresponse


@dataclasses.dataclass
class UpdateFulfillmentPolicyPathParams:
    fulfillment_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fulfillmentPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateFulfillmentPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateFulfillmentPolicyRequest:
    path_params: UpdateFulfillmentPolicyPathParams = dataclasses.field()
    request: shared_fulfillmentpolicyrequest.FulfillmentPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateFulfillmentPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateFulfillmentPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_fulfillment_policy_response: Optional[shared_setfulfillmentpolicyresponse.SetFulfillmentPolicyResponse] = dataclasses.field(default=None)
    
