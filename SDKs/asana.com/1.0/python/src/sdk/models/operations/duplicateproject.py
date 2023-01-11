import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectduplicaterequest as shared_projectduplicaterequest
from ..shared import jobresponse as shared_jobresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DuplicateProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DuplicateProjectQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DuplicateProjectRequestBody:
    data: Optional[shared_projectduplicaterequest.ProjectDuplicateRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class DuplicateProject201ApplicationJSON:
    data: Optional[shared_jobresponse.JobResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class DuplicateProjectRequest:
    path_params: DuplicateProjectPathParams = dataclasses.field()
    query_params: DuplicateProjectQueryParams = dataclasses.field()
    request: Optional[DuplicateProjectRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DuplicateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    duplicate_project_201_application_json_object: Optional[DuplicateProject201ApplicationJSON] = dataclasses.field(default=None)
    
