import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import goaladdsupportingworkrequest as shared_goaladdsupportingworkrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveSupportingWorkForGoalPathParams:
    goal_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveSupportingWorkForGoalQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveSupportingWorkForGoalRequestBody:
    data: Optional[shared_goaladdsupportingworkrequest.GoalAddSupportingWorkRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveSupportingWorkForGoal200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveSupportingWorkForGoalRequest:
    path_params: RemoveSupportingWorkForGoalPathParams = dataclasses.field()
    query_params: RemoveSupportingWorkForGoalQueryParams = dataclasses.field()
    request: RemoveSupportingWorkForGoalRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveSupportingWorkForGoalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_supporting_work_for_goal_200_application_json_object: Optional[RemoveSupportingWorkForGoal200ApplicationJSON] = dataclasses.field(default=None)
    
