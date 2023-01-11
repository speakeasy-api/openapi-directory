import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import teammembershipcompact as shared_teammembershipcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetTeamMembershipsForUserPathParams:
    user_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMembershipsForUserQueryParams:
    workspace: str = dataclasses.field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTeamMembershipsForUser200ApplicationJSON:
    data: Optional[list[shared_teammembershipcompact.TeamMembershipCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetTeamMembershipsForUserRequest:
    path_params: GetTeamMembershipsForUserPathParams = dataclasses.field()
    query_params: GetTeamMembershipsForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamMembershipsForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_team_memberships_for_user_200_application_json_object: Optional[GetTeamMembershipsForUser200ApplicationJSON] = dataclasses.field(default=None)
    
