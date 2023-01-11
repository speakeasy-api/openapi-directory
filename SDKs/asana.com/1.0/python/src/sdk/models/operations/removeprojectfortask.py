import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskremoveprojectrequest as shared_taskremoveprojectrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveProjectForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveProjectForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveProjectForTaskRequestBody:
    data: Optional[shared_taskremoveprojectrequest.TaskRemoveProjectRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveProjectForTask200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveProjectForTaskRequest:
    path_params: RemoveProjectForTaskPathParams = dataclasses.field()
    query_params: RemoveProjectForTaskQueryParams = dataclasses.field()
    request: RemoveProjectForTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveProjectForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_project_for_task_200_application_json_object: Optional[RemoveProjectForTask200ApplicationJSON] = dataclasses.field(default=None)
    
