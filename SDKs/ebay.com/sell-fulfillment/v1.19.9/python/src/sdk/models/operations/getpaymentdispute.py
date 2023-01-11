import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentdispute as shared_paymentdispute


GET_PAYMENT_DISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class GetPaymentDisputePathParams:
    payment_dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentDisputeSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetPaymentDisputeRequest:
    path_params: GetPaymentDisputePathParams = dataclasses.field()
    security: GetPaymentDisputeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetPaymentDisputeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_dispute: Optional[shared_paymentdispute.PaymentDispute] = dataclasses.field(default=None)
    
