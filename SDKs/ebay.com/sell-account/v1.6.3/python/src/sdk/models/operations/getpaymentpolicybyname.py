import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentpolicy as shared_paymentpolicy


@dataclasses.dataclass
class GetPaymentPolicyByNameQueryParams:
    marketplace_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentPolicyByNameSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPaymentPolicyByNameRequest:
    query_params: GetPaymentPolicyByNameQueryParams = dataclasses.field()
    security: GetPaymentPolicyByNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentPolicyByNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_policy: Optional[shared_paymentpolicy.PaymentPolicy] = dataclasses.field(default=None)
    
