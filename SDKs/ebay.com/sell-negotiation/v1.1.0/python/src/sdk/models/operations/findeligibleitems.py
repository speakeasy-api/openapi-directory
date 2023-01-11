import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pagedeligibleitemcollection as shared_pagedeligibleitemcollection


@dataclasses.dataclass
class FindEligibleItemsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FindEligibleItemsHeaders:
    x_ebay_c_marketplace_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindEligibleItemsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FindEligibleItemsRequest:
    headers: FindEligibleItemsHeaders = dataclasses.field()
    query_params: FindEligibleItemsQueryParams = dataclasses.field()
    security: FindEligibleItemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindEligibleItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paged_eligible_item_collection: Optional[shared_pagedeligibleitemcollection.PagedEligibleItemCollection] = dataclasses.field(default=None)
    
