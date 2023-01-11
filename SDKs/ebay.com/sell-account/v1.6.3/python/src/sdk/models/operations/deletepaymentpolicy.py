import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeletePaymentPolicyPathParams:
    payment_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePaymentPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeletePaymentPolicyRequest:
    path_params: DeletePaymentPolicyPathParams = dataclasses.field()
    security: DeletePaymentPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeletePaymentPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
