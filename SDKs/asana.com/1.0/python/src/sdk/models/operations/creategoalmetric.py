import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import goalmetricrequest as shared_goalmetricrequest
from ..shared import goalresponse as shared_goalresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateGoalMetricPathParams:
    goal_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'goal_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateGoalMetricQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGoalMetricRequestBodyInput:
    data: Optional[shared_goalmetricrequest.GoalMetricRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGoalMetric200ApplicationJSON:
    data: Optional[shared_goalresponse.GoalResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateGoalMetricRequest:
    path_params: CreateGoalMetricPathParams = dataclasses.field()
    query_params: CreateGoalMetricQueryParams = dataclasses.field()
    request: CreateGoalMetricRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGoalMetricResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_goal_metric_200_application_json_object: Optional[CreateGoalMetric200ApplicationJSON] = dataclasses.field(default=None)
    
