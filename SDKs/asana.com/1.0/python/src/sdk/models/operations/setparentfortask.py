import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tasksetparentrequest as shared_tasksetparentrequest
from ..shared import taskresponse as shared_taskresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class SetParentForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SetParentForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SetParentForTaskRequestBody:
    data: Optional[shared_tasksetparentrequest.TaskSetParentRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class SetParentForTask200ApplicationJSON:
    data: Optional[shared_taskresponse.TaskResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class SetParentForTaskRequest:
    path_params: SetParentForTaskPathParams = dataclasses.field()
    query_params: SetParentForTaskQueryParams = dataclasses.field()
    request: SetParentForTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetParentForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    set_parent_for_task_200_application_json_object: Optional[SetParentForTask200ApplicationJSON] = dataclasses.field(default=None)
    
