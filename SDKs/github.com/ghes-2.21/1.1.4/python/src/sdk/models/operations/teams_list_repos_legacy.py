import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import minimal_repository as shared_minimal_repository


@dataclasses.dataclass
class TeamsListReposLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListReposLegacyQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListReposLegacyRequest:
    path_params: TeamsListReposLegacyPathParams = dataclasses.field()
    query_params: TeamsListReposLegacyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListReposLegacyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    minimal_repositories: Optional[list[shared_minimal_repository.MinimalRepository]] = dataclasses.field(default=None)
    
