import dataclasses
from typing import Any,Optional
from ..shared import search_result_page as shared_search_result_page


@dataclasses.dataclass
class GetUsersSelectedUserSearchCodePathParams:
    selected_user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersSelectedUserSearchCodeQueryParams:
    search_query: str = dataclasses.field(metadata={'query_param': { 'field_name': 'search_query', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagelen: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagelen', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersSelectedUserSearchCodeRequest:
    path_params: GetUsersSelectedUserSearchCodePathParams = dataclasses.field()
    query_params: GetUsersSelectedUserSearchCodeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersSelectedUserSearchCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    search_result_page: Optional[shared_search_result_page.SearchResultPage] = dataclasses.field(default=None)
    
