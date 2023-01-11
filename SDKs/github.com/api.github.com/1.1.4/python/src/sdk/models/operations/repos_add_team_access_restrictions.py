import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team as shared_team
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ReposAddTeamAccessRestrictionsPathParams:
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ReposAddTeamAccessRestrictionsRequestBody:
    teams: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    

@dataclasses.dataclass
class ReposAddTeamAccessRestrictionsRequest:
    path_params: ReposAddTeamAccessRestrictionsPathParams = dataclasses.field()
    request: Optional[ReposAddTeamAccessRestrictionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposAddTeamAccessRestrictionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    teams: Optional[list[shared_team.Team]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
