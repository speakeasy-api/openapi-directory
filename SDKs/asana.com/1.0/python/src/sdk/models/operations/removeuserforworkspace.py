import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspaceremoveuserrequest as shared_workspaceremoveuserrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveUserForWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveUserForWorkspaceQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserForWorkspaceRequestBody:
    data: Optional[shared_workspaceremoveuserrequest.WorkspaceRemoveUserRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveUserForWorkspace204ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveUserForWorkspaceRequest:
    path_params: RemoveUserForWorkspacePathParams = dataclasses.field()
    query_params: RemoveUserForWorkspaceQueryParams = dataclasses.field()
    request: RemoveUserForWorkspaceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveUserForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_user_for_workspace_204_application_json_object: Optional[RemoveUserForWorkspace204ApplicationJSON] = dataclasses.field(default=None)
    
