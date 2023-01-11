import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import contestpaymentdisputerequest as shared_contestpaymentdisputerequest


CONTEST_PAYMENT_DISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class ContestPaymentDisputePathParams:
    payment_dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ContestPaymentDisputeSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ContestPaymentDisputeRequest:
    path_params: ContestPaymentDisputePathParams = dataclasses.field()
    security: ContestPaymentDisputeSecurity = dataclasses.field()
    request: Optional[shared_contestpaymentdisputerequest.ContestPaymentDisputeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ContestPaymentDisputeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
