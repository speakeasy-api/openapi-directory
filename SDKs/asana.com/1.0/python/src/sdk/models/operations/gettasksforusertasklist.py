import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskcompact as shared_taskcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetTasksForUserTaskListPathParams:
    user_task_list_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_task_list_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTasksForUserTaskListQueryParams:
    completed_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed_since', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTasksForUserTaskList200ApplicationJSON:
    data: Optional[list[shared_taskcompact.TaskCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetTasksForUserTaskListRequest:
    path_params: GetTasksForUserTaskListPathParams = dataclasses.field()
    query_params: GetTasksForUserTaskListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTasksForUserTaskListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_tasks_for_user_task_list_200_application_json_object: Optional[GetTasksForUserTaskList200ApplicationJSON] = dataclasses.field(default=None)
    
