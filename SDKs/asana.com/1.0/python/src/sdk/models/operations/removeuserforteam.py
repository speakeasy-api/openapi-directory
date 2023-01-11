import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import teamremoveuserrequest as shared_teamremoveuserrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveUserForTeamPathParams:
    team_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveUserForTeamQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserForTeamRequestBody:
    data: Optional[shared_teamremoveuserrequest.TeamRemoveUserRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserForTeam204ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveUserForTeamRequest:
    path_params: RemoveUserForTeamPathParams = dataclasses.field()
    query_params: RemoveUserForTeamQueryParams = dataclasses.field()
    request: RemoveUserForTeamRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveUserForTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_user_for_team_204_application_json_object: Optional[RemoveUserForTeam204ApplicationJSON] = dataclasses.field(default=None)
    
