import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import eventitemsearchresponse as shared_eventitemsearchresponse


@dataclasses.dataclass
class GetEventItemsQueryParams:
    event_ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'event_ids', 'style': 'form', 'explode': True }})
    category_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category_ids', 'style': 'form', 'explode': True }})
    delivery_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'delivery_country', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEventItemsHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventItemsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetEventItemsRequest:
    headers: GetEventItemsHeaders = dataclasses.field()
    query_params: GetEventItemsQueryParams = dataclasses.field()
    security: GetEventItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    event_item_search_response: Optional[shared_eventitemsearchresponse.EventItemSearchResponse] = dataclasses.field(default=None)
    
