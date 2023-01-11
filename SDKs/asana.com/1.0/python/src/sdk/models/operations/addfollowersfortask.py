import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskaddfollowersrequest as shared_taskaddfollowersrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class AddFollowersForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddFollowersForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AddFollowersForTaskRequestBody:
    data: Optional[shared_taskaddfollowersrequest.TaskAddFollowersRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class AddFollowersForTask200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class AddFollowersForTaskRequest:
    path_params: AddFollowersForTaskPathParams = dataclasses.field()
    query_params: AddFollowersForTaskQueryParams = dataclasses.field()
    request: AddFollowersForTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddFollowersForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    add_followers_for_task_200_application_json_object: Optional[AddFollowersForTask200ApplicationJSON] = dataclasses.field(default=None)
    
