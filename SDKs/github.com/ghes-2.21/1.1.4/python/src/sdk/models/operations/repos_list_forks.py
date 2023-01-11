import dataclasses
from typing import Optional
from enum import Enum
from ..shared import repo_enum1 as shared_repo_enum1
from ..shared import basic_error as shared_basic_error
from ..shared import minimal_repository as shared_minimal_repository
from ..shared import scim_error as shared_scim_error


@dataclasses.dataclass
class ReposListForksPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListForksQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_repo_enum1.RepoEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListForksRequest:
    path_params: ReposListForksPathParams = dataclasses.field()
    query_params: ReposListForksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListForksResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    minimal_repositories: Optional[list[shared_minimal_repository.MinimalRepository]] = dataclasses.field(default=None)
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    
