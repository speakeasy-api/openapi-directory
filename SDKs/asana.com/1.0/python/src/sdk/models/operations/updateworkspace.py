import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacerequest as shared_workspacerequest
from ..shared import workspaceresponse as shared_workspaceresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class UpdateWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateWorkspaceQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspaceRequestBodyInput:
    data: Optional[shared_workspacerequest.WorkspaceRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateWorkspace200ApplicationJSON:
    data: Optional[shared_workspaceresponse.WorkspaceResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class UpdateWorkspaceRequest:
    path_params: UpdateWorkspacePathParams = dataclasses.field()
    query_params: UpdateWorkspaceQueryParams = dataclasses.field()
    request: UpdateWorkspaceRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    update_workspace_200_application_json_object: Optional[UpdateWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
