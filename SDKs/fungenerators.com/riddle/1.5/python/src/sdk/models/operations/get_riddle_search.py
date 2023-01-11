import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRiddleSearchQueryParams:
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRiddleSearchSecurity:
    x_fungenerators_api_secret: shared_security.SchemeXFungeneratorsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetRiddleSearchRequest:
    query_params: GetRiddleSearchQueryParams = dataclasses.field()
    security: GetRiddleSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRiddleSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
