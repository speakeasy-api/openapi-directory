import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskaddtagrequest as shared_taskaddtagrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class AddTagForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddTagForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AddTagForTaskRequestBody:
    data: Optional[shared_taskaddtagrequest.TaskAddTagRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class AddTagForTask200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class AddTagForTaskRequest:
    path_params: AddTagForTaskPathParams = dataclasses.field()
    query_params: AddTagForTaskQueryParams = dataclasses.field()
    request: AddTagForTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddTagForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    add_tag_for_task_200_application_json_object: Optional[AddTagForTask200ApplicationJSON] = dataclasses.field(default=None)
    
