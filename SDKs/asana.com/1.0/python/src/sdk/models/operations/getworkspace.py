import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspaceresponse as shared_workspaceresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkspaceQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetWorkspace200ApplicationJSON:
    data: Optional[shared_workspaceresponse.WorkspaceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetWorkspaceRequest:
    path_params: GetWorkspacePathParams = dataclasses.field()
    query_params: GetWorkspaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_workspace_200_application_json_object: Optional[GetWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
