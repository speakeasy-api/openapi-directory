import dataclasses
from typing import Optional
from enum import Enum
from ..shared import repo_enum4 as shared_repo_enum4
from ..shared import repo_enum5 as shared_repo_enum5
from ..shared import repo_enum2 as shared_repo_enum2
from ..shared import pull_request_simple as shared_pull_request_simple
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class PullsListPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PullsListQueryParams:
    base: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'base', 'style': 'form', 'explode': True }})
    direction: Optional[shared_repo_enum4.RepoEnum4] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    head: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_repo_enum5.RepoEnum5] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[shared_repo_enum2.RepoEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PullsListRequest:
    path_params: PullsListPathParams = dataclasses.field()
    query_params: PullsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PullsListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    pull_request_simples: Optional[list[shared_pull_request_simple.PullRequestSimple]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
