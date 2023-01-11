import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteFulfillmentPolicyPathParams:
    fulfillment_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fulfillmentPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFulfillmentPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteFulfillmentPolicyRequest:
    path_params: DeleteFulfillmentPolicyPathParams = dataclasses.field()
    security: DeleteFulfillmentPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteFulfillmentPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
