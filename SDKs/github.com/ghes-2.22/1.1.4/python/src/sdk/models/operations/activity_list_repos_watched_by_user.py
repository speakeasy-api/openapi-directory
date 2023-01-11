import dataclasses
from typing import Optional
from ..shared import minimal_repository as shared_minimal_repository


@dataclasses.dataclass
class ActivityListReposWatchedByUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListReposWatchedByUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListReposWatchedByUserRequest:
    path_params: ActivityListReposWatchedByUserPathParams = dataclasses.field()
    query_params: ActivityListReposWatchedByUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListReposWatchedByUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    minimal_repositories: Optional[list[shared_minimal_repository.MinimalRepository]] = dataclasses.field(default=None)
    
