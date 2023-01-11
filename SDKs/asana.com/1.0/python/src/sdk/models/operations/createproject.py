import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectrequest as shared_projectrequest
from ..shared import projectresponse as shared_projectresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateProjectQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateProjectRequestBodyInput:
    data: Optional[shared_projectrequest.ProjectRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateProject201ApplicationJSON:
    data: Optional[shared_projectresponse.ProjectResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateProjectRequest:
    query_params: CreateProjectQueryParams = dataclasses.field()
    request: CreateProjectRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_project_201_application_json_object: Optional[CreateProject201ApplicationJSON] = dataclasses.field(default=None)
    
