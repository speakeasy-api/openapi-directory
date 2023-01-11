import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import productsearchresponse as shared_productsearchresponse


@dataclasses.dataclass
class SearchQueryParams:
    aspect_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aspect_filter', 'style': 'form', 'explode': True }})
    category_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category_ids', 'style': 'form', 'explode': True }})
    fieldgroups: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fieldgroups', 'style': 'form', 'explode': True }})
    gtin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gtin', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mpn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mpn', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SearchRequest:
    query_params: SearchQueryParams = dataclasses.field()
    security: SearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    product_search_response: Optional[shared_productsearchresponse.ProductSearchResponse] = dataclasses.field(default=None)
    
