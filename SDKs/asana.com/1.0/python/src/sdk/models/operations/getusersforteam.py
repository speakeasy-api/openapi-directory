import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetUsersForTeamPathParams:
    team_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersForTeamQueryParams:
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetUsersForTeam200ApplicationJSON:
    data: Optional[list[shared_usercompact.UserCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetUsersForTeamRequest:
    path_params: GetUsersForTeamPathParams = dataclasses.field()
    query_params: GetUsersForTeamQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersForTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_users_for_team_200_application_json_object: Optional[GetUsersForTeam200ApplicationJSON] = dataclasses.field(default=None)
    
