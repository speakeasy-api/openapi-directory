import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usertasklistresponse as shared_usertasklistresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetUserTaskListForUserPathParams:
    user_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserTaskListForUserQueryParams:
    workspace: str = dataclasses.field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserTaskListForUser200ApplicationJSON:
    data: Optional[shared_usertasklistresponse.UserTaskListResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetUserTaskListForUserRequest:
    path_params: GetUserTaskListForUserPathParams = dataclasses.field()
    query_params: GetUserTaskListForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserTaskListForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_user_task_list_for_user_200_application_json_object: Optional[GetUserTaskListForUser200ApplicationJSON] = dataclasses.field(default=None)
    
