import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentpolicyrequest as shared_paymentpolicyrequest
from ..shared import setpaymentpolicyresponse as shared_setpaymentpolicyresponse


@dataclasses.dataclass
class CreatePaymentPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreatePaymentPolicyRequest:
    request: shared_paymentpolicyrequest.PaymentPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePaymentPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreatePaymentPolicyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    set_payment_policy_response: Optional[shared_setpaymentpolicyresponse.SetPaymentPolicyResponse] = dataclasses.field(default=None)
    
