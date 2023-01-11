import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskremovefollowersrequest as shared_taskremovefollowersrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveFollowerForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveFollowerForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveFollowerForTaskRequestBody:
    data: Optional[shared_taskremovefollowersrequest.TaskRemoveFollowersRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveFollowerForTask200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveFollowerForTaskRequest:
    path_params: RemoveFollowerForTaskPathParams = dataclasses.field()
    query_params: RemoveFollowerForTaskQueryParams = dataclasses.field()
    request: RemoveFollowerForTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveFollowerForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_follower_for_task_200_application_json_object: Optional[RemoveFollowerForTask200ApplicationJSON] = dataclasses.field(default=None)
    
