import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import dealitemsearchresponse as shared_dealitemsearchresponse


@dataclasses.dataclass
class GetDealItemsQueryParams:
    category_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category_ids', 'style': 'form', 'explode': True }})
    commissionable: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'commissionable', 'style': 'form', 'explode': True }})
    delivery_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'delivery_country', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDealItemsHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDealItemsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetDealItemsRequest:
    headers: GetDealItemsHeaders = dataclasses.field()
    query_params: GetDealItemsQueryParams = dataclasses.field()
    security: GetDealItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDealItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deal_item_search_response: Optional[shared_dealitemsearchresponse.DealItemSearchResponse] = dataclasses.field(default=None)
    
