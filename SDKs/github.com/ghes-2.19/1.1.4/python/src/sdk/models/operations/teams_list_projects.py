import dataclasses
from typing import Optional
from ..shared import team_project as shared_team_project


@dataclasses.dataclass
class TeamsListProjectsPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListProjectsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListProjectsHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListProjectsRequest:
    headers: TeamsListProjectsHeaders = dataclasses.field()
    path_params: TeamsListProjectsPathParams = dataclasses.field()
    query_params: TeamsListProjectsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListProjectsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_projects: Optional[list[shared_team_project.TeamProject]] = dataclasses.field(default=None)
    
