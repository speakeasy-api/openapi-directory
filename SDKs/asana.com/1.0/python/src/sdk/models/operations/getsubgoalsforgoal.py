import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import goalcompact as shared_goalcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetSubgoalsForGoalPathParams:
    goal_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubgoalsForGoalQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSubgoalsForGoal200ApplicationJSON:
    data: Optional[list[shared_goalcompact.GoalCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetSubgoalsForGoalRequest:
    path_params: GetSubgoalsForGoalPathParams = dataclasses.field()
    query_params: GetSubgoalsForGoalQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubgoalsForGoalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_subgoals_for_goal_200_application_json_object: Optional[GetSubgoalsForGoal200ApplicationJSON] = dataclasses.field(default=None)
    
