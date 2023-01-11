import dataclasses
from typing import Optional
from ..shared import team_project as shared_team_project


@dataclasses.dataclass
class TeamsCheckPermissionsForProjectPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsCheckPermissionsForProjectHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsCheckPermissionsForProjectRequest:
    headers: TeamsCheckPermissionsForProjectHeaders = dataclasses.field()
    path_params: TeamsCheckPermissionsForProjectPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsCheckPermissionsForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_project: Optional[shared_team_project.TeamProject] = dataclasses.field(default=None)
    
