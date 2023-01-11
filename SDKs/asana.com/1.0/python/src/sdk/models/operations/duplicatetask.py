import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskduplicaterequest as shared_taskduplicaterequest
from ..shared import jobresponse as shared_jobresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DuplicateTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DuplicateTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DuplicateTaskRequestBody:
    data: Optional[shared_taskduplicaterequest.TaskDuplicateRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class DuplicateTask201ApplicationJSON:
    data: Optional[shared_jobresponse.JobResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class DuplicateTaskRequest:
    path_params: DuplicateTaskPathParams = dataclasses.field()
    query_params: DuplicateTaskQueryParams = dataclasses.field()
    request: DuplicateTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DuplicateTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    duplicate_task_201_application_json_object: Optional[DuplicateTask201ApplicationJSON] = dataclasses.field(default=None)
    
