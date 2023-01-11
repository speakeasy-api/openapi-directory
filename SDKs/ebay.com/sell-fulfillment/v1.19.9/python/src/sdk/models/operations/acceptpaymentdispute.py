import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import acceptpaymentdisputerequest as shared_acceptpaymentdisputerequest


ACCEPT_PAYMENT_DISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class AcceptPaymentDisputePathParams:
    payment_dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AcceptPaymentDisputeSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AcceptPaymentDisputeRequest:
    path_params: AcceptPaymentDisputePathParams = dataclasses.field()
    security: AcceptPaymentDisputeSecurity = dataclasses.field()
    request: Optional[shared_acceptpaymentdisputerequest.AcceptPaymentDisputeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptPaymentDisputeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
