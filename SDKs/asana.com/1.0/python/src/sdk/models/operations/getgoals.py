import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import goalcompact as shared_goalcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetGoalsQueryParams:
    is_workspace_level: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_workspace_level', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    portfolio: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'portfolio', 'style': 'form', 'explode': True }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    team: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    time_periods: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_periods', 'style': 'form', 'explode': True }})
    workspace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetGoals200ApplicationJSON:
    data: Optional[list[shared_goalcompact.GoalCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetGoalsRequest:
    query_params: GetGoalsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGoalsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_goals_200_application_json_object: Optional[GetGoals200ApplicationJSON] = dataclasses.field(default=None)
    
