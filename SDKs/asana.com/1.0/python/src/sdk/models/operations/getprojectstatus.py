import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectstatusresponse as shared_projectstatusresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetProjectStatusPathParams:
    project_status_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_status_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectStatusQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetProjectStatus200ApplicationJSON:
    data: Optional[shared_projectstatusresponse.ProjectStatusResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetProjectStatusRequest:
    path_params: GetProjectStatusPathParams = dataclasses.field()
    query_params: GetProjectStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_project_status_200_application_json_object: Optional[GetProjectStatus200ApplicationJSON] = dataclasses.field(default=None)
    
