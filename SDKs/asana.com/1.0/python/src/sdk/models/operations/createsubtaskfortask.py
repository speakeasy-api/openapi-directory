import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskrequest as shared_taskrequest
from ..shared import taskresponse as shared_taskresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateSubtaskForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSubtaskForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSubtaskForTaskRequestBodyInput:
    data: Optional[shared_taskrequest.TaskRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSubtaskForTask201ApplicationJSON:
    data: Optional[shared_taskresponse.TaskResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateSubtaskForTaskRequest:
    path_params: CreateSubtaskForTaskPathParams = dataclasses.field()
    query_params: CreateSubtaskForTaskQueryParams = dataclasses.field()
    request: CreateSubtaskForTaskRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSubtaskForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_subtask_for_task_201_application_json_object: Optional[CreateSubtaskForTask201ApplicationJSON] = dataclasses.field(default=None)
    
