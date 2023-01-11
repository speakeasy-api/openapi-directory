import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import paymentdisputeactivityhistory as shared_paymentdisputeactivityhistory


GET_ACTIVITIES_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclasses.dataclass
class GetActivitiesPathParams:
    payment_dispute_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActivitiesSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetActivitiesRequest:
    path_params: GetActivitiesPathParams = dataclasses.field()
    security: GetActivitiesSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetActivitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_dispute_activity_history: Optional[shared_paymentdisputeactivityhistory.PaymentDisputeActivityHistory] = dataclasses.field(default=None)
    
