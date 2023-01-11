import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskaddfollowersrequest as shared_taskaddfollowersrequest
from ..shared import goalresponse as shared_goalresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveFollowersPathParams:
    goal_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveFollowersQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveFollowersRequestBody:
    data: Optional[shared_taskaddfollowersrequest.TaskAddFollowersRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveFollowers201ApplicationJSON:
    data: Optional[shared_goalresponse.GoalResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveFollowersRequest:
    path_params: RemoveFollowersPathParams = dataclasses.field()
    query_params: RemoveFollowersQueryParams = dataclasses.field()
    request: RemoveFollowersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveFollowersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_followers_201_application_json_object: Optional[RemoveFollowers201ApplicationJSON] = dataclasses.field(default=None)
    
