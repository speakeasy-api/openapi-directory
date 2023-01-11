import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event as shared_event


@dataclasses.dataclass
class GetEventPathParams:
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEventRequest:
    headers: GetEventHeaders = dataclasses.field()
    path_params: GetEventPathParams = dataclasses.field()
    security: GetEventSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event: Optional[shared_event.Event] = dataclasses.field(default=None)
    
