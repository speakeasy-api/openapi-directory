import dataclasses
from typing import Optional
from ..shared import team_project as shared_team_project


@dataclasses.dataclass
class TeamsListProjectsInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListProjectsInOrgQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListProjectsInOrgRequest:
    path_params: TeamsListProjectsInOrgPathParams = dataclasses.field()
    query_params: TeamsListProjectsInOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListProjectsInOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    team_projects: Optional[list[shared_team_project.TeamProject]] = dataclasses.field(default=None)
    
