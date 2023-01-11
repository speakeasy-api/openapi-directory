import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacecompact as shared_workspacecompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetWorkspacesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetWorkspaces200ApplicationJSON:
    data: Optional[list[shared_workspacecompact.WorkspaceCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetWorkspacesRequest:
    query_params: GetWorkspacesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_workspaces_200_application_json_object: Optional[GetWorkspaces200ApplicationJSON] = dataclasses.field(default=None)
    
