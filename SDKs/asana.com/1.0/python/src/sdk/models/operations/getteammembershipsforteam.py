import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import teammembershipcompact as shared_teammembershipcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetTeamMembershipsForTeamPathParams:
    team_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMembershipsForTeamQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTeamMembershipsForTeam200ApplicationJSON:
    data: Optional[list[shared_teammembershipcompact.TeamMembershipCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetTeamMembershipsForTeamRequest:
    path_params: GetTeamMembershipsForTeamPathParams = dataclasses.field()
    query_params: GetTeamMembershipsForTeamQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamMembershipsForTeamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_team_memberships_for_team_200_application_json_object: Optional[GetTeamMembershipsForTeam200ApplicationJSON] = dataclasses.field(default=None)
    
