import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import eventsearchresponse as shared_eventsearchresponse


@dataclasses.dataclass
class GetEventsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEventsHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEventsRequest:
    headers: GetEventsHeaders = dataclasses.field()
    query_params: GetEventsQueryParams = dataclasses.field()
    security: GetEventsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_search_response: Optional[shared_eventsearchresponse.EventSearchResponse] = dataclasses.field(default=None)
    
