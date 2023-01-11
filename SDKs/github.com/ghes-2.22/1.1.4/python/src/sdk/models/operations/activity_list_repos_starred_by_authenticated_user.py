import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import sort_enum as shared_sort_enum
from ..shared import basic_error as shared_basic_error
from ..shared import repository as shared_repository
from ..shared import starred_repository as shared_starred_repository


@dataclasses.dataclass
class ActivityListReposStarredByAuthenticatedUserQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_sort_enum.SortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListReposStarredByAuthenticatedUserRequest:
    query_params: ActivityListReposStarredByAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListReposStarredByAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    repositories: Optional[list[shared_repository.Repository]] = dataclasses.field(default=None)
    starred_repositories: Optional[list[shared_starred_repository.StarredRepository]] = dataclasses.field(default=None)
    
