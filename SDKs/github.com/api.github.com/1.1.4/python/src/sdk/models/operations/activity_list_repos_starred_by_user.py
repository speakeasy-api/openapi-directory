import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import sort_enum as shared_sort_enum
from ..shared import repository as shared_repository
from ..shared import starred_repository as shared_starred_repository


@dataclasses.dataclass
class ActivityListReposStarredByUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListReposStarredByUserQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_sort_enum.SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListReposStarredByUserRequest:
    path_params: ActivityListReposStarredByUserPathParams = dataclasses.field()
    query_params: ActivityListReposStarredByUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListReposStarredByUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    repositories: Optional[list[shared_repository.Repository]] = dataclasses.field(default=None)
    starred_repositories: Optional[list[shared_starred_repository.StarredRepository]] = dataclasses.field(default=None)
    
