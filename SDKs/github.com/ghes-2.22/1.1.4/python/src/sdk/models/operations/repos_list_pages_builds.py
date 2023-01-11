import dataclasses
from typing import Optional
from ..shared import page_build as shared_page_build


@dataclasses.dataclass
class ReposListPagesBuildsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListPagesBuildsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListPagesBuildsRequest:
    path_params: ReposListPagesBuildsPathParams = dataclasses.field()
    query_params: ReposListPagesBuildsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListPagesBuildsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    page_builds: Optional[list[shared_page_build.PageBuild]] = dataclasses.field(default=None)
    
