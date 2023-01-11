import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetFactSearchQueryParams:
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    subcategory: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'subcategory', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFactSearchSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetFactSearchRequest:
    query_params: GetFactSearchQueryParams = dataclasses.field()
    security: GetFactSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetFactSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
