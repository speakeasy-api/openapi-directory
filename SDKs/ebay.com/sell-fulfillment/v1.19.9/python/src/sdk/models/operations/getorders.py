import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import ordersearchpagedcollection as shared_ordersearchpagedcollection


@dataclasses.dataclass
class GetOrdersQueryParams:
    field_groups: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fieldGroups', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderIds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrdersSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetOrdersRequest:
    query_params: GetOrdersQueryParams = dataclasses.field()
    security: GetOrdersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    order_search_paged_collection: Optional[shared_ordersearchpagedcollection.OrderSearchPagedCollection] = dataclasses.field(default=None)
    
