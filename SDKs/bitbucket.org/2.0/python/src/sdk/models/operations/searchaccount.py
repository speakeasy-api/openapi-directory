import dataclasses
from typing import Any,Optional
from ..shared import search_result_page as shared_search_result_page


@dataclasses.dataclass
class SearchAccountPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchAccountQueryParams:
    search_query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'search_query', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagelen: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagelen', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchAccountRequest:
    path_params: SearchAccountPathParams = dataclasses.field()
    query_params: SearchAccountQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    search_result_page: Optional[shared_search_result_page.SearchResultPage] = dataclasses.field(default=None)
    
