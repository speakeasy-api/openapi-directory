import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import fulfillmentpolicy as shared_fulfillmentpolicy


@dataclasses.dataclass
class GetFulfillmentPolicyPathParams:
    fulfillment_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fulfillmentPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFulfillmentPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetFulfillmentPolicyRequest:
    path_params: GetFulfillmentPolicyPathParams = dataclasses.field()
    security: GetFulfillmentPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFulfillmentPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    fulfillment_policy: Optional[shared_fulfillmentpolicy.FulfillmentPolicy] = dataclasses.field(default=None)
    
