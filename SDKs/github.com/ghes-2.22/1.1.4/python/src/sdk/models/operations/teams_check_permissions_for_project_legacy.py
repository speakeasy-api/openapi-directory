import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_project as shared_team_project


@dataclasses.dataclass
class TeamsCheckPermissionsForProjectLegacyPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCheckPermissionsForProjectLegacy415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class TeamsCheckPermissionsForProjectLegacyRequest:
    path_params: TeamsCheckPermissionsForProjectLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsCheckPermissionsForProjectLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    team_project: Optional[shared_team_project.TeamProject] = dataclasses.field(default=None)
    teams_check_permissions_for_project_legacy_415_application_json_object: Optional[TeamsCheckPermissionsForProjectLegacy415ApplicationJSON] = dataclasses.field(default=None)
    
