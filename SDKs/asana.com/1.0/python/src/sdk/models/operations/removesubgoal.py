import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import goalremovesubgoalrequest as shared_goalremovesubgoalrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveSubgoalPathParams:
    goal_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveSubgoalQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveSubgoalRequestBody:
    data: Optional[shared_goalremovesubgoalrequest.GoalRemoveSubgoalRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveSubgoal200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveSubgoalRequest:
    path_params: RemoveSubgoalPathParams = dataclasses.field()
    query_params: RemoveSubgoalQueryParams = dataclasses.field()
    request: RemoveSubgoalRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveSubgoalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_subgoal_200_application_json_object: Optional[RemoveSubgoal200ApplicationJSON] = dataclasses.field(default=None)
    
