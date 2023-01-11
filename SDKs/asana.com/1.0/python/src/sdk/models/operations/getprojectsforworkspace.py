import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectcompact as shared_projectcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetProjectsForWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectsForWorkspaceQueryParams:
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetProjectsForWorkspace200ApplicationJSON:
    data: Optional[list[shared_projectcompact.ProjectCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetProjectsForWorkspaceRequest:
    path_params: GetProjectsForWorkspacePathParams = dataclasses.field()
    query_params: GetProjectsForWorkspaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectsForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_projects_for_workspace_200_application_json_object: Optional[GetProjectsForWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
