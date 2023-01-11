import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fulfillmentpolicyrequest as shared_fulfillmentpolicyrequest
from ..shared import setfulfillmentpolicyresponse as shared_setfulfillmentpolicyresponse


@dataclasses.dataclass
class CreateFulfillmentPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateFulfillmentPolicyRequest:
    request: shared_fulfillmentpolicyrequest.FulfillmentPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFulfillmentPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateFulfillmentPolicyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    set_fulfillment_policy_response: Optional[shared_setfulfillmentpolicyresponse.SetFulfillmentPolicyResponse] = dataclasses.field(default=None)
    
