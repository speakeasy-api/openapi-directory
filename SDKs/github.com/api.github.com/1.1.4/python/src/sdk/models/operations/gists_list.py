import dataclasses
from typing import Optional
from ..shared import base_gist as shared_base_gist
from ..shared import basic_error as shared_basic_error


@dataclasses.dataclass
class GistsListQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GistsListRequest:
    query_params: GistsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GistsListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    base_gists: Optional[list[shared_base_gist.BaseGist]] = dataclasses.field(default=None)
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    
