import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectstatusrequest as shared_projectstatusrequest
from ..shared import projectstatusresponse as shared_projectstatusresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateProjectStatusForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateProjectStatusForProjectQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateProjectStatusForProjectRequestBodyInput:
    data: Optional[shared_projectstatusrequest.ProjectStatusRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateProjectStatusForProject201ApplicationJSON:
    data: Optional[shared_projectstatusresponse.ProjectStatusResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateProjectStatusForProjectRequest:
    path_params: CreateProjectStatusForProjectPathParams = dataclasses.field()
    query_params: CreateProjectStatusForProjectQueryParams = dataclasses.field()
    request: CreateProjectStatusForProjectRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateProjectStatusForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_project_status_for_project_201_application_json_object: Optional[CreateProjectStatusForProject201ApplicationJSON] = dataclasses.field(default=None)
    
