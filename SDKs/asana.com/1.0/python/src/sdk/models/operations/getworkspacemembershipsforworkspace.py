import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacemembershipcompact as shared_workspacemembershipcompact


@dataclasses.dataclass
class GetWorkspaceMembershipsForWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspaceMembershipsForWorkspaceQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetWorkspaceMembershipsForWorkspace200ApplicationJSON:
    data: Optional[list[shared_workspacemembershipcompact.WorkspaceMembershipCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetWorkspaceMembershipsForWorkspaceRequest:
    path_params: GetWorkspaceMembershipsForWorkspacePathParams = dataclasses.field()
    query_params: GetWorkspaceMembershipsForWorkspaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceMembershipsForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_workspace_memberships_for_workspace_200_application_json_object: Optional[GetWorkspaceMembershipsForWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
