import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentpolicyresponse as shared_paymentpolicyresponse


@dataclasses.dataclass
class GetPaymentPoliciesQueryParams:
    marketplace_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentPoliciesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPaymentPoliciesRequest:
    query_params: GetPaymentPoliciesQueryParams = dataclasses.field()
    security: GetPaymentPoliciesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_policy_response: Optional[shared_paymentpolicyresponse.PaymentPolicyResponse] = dataclasses.field(default=None)
    
