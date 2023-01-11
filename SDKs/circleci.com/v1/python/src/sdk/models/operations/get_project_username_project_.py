import dataclasses
from typing import Optional
from enum import Enum
from ..shared import filter_enum as shared_filter_enum
from ..shared import build as shared_build


@dataclasses.dataclass
class GetProjectUsernameProjectPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectQueryParams:
    filter: Optional[shared_filter_enum.FilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectRequest:
    path_params: GetProjectUsernameProjectPathParams = dataclasses.field()
    query_params: GetProjectUsernameProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectUsernameProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    builds: Optional[list[shared_build.Build]] = dataclasses.field(default=None)
    
