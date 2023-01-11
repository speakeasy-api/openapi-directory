import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentpolicy as shared_paymentpolicy


@dataclasses.dataclass
class GetPaymentPolicyPathParams:
    payment_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPaymentPolicyRequest:
    path_params: GetPaymentPolicyPathParams = dataclasses.field()
    security: GetPaymentPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_policy: Optional[shared_paymentpolicy.PaymentPolicy] = dataclasses.field(default=None)
    
