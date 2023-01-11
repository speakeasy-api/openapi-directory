import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacemembershipresponse as shared_workspacemembershipresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetWorkspaceMembershipPathParams:
    workspace_membership_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_membership_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspaceMembershipQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetWorkspaceMembership200ApplicationJSON:
    data: Optional[shared_workspacemembershipresponse.WorkspaceMembershipResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetWorkspaceMembershipRequest:
    path_params: GetWorkspaceMembershipPathParams = dataclasses.field()
    query_params: GetWorkspaceMembershipQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceMembershipResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_workspace_membership_200_application_json_object: Optional[GetWorkspaceMembership200ApplicationJSON] = dataclasses.field(default=None)
    
