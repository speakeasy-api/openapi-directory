import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentpolicyrequest as shared_paymentpolicyrequest
from ..shared import setpaymentpolicyresponse as shared_setpaymentpolicyresponse


@dataclasses.dataclass
class UpdatePaymentPolicyPathParams:
    payment_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePaymentPolicySecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdatePaymentPolicyRequest:
    path_params: UpdatePaymentPolicyPathParams = dataclasses.field()
    request: shared_paymentpolicyrequest.PaymentPolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePaymentPolicySecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdatePaymentPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_payment_policy_response: Optional[shared_setpaymentpolicyresponse.SetPaymentPolicyResponse] = dataclasses.field(default=None)
    
