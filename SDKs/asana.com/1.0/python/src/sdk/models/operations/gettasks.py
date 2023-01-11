import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskcompact as shared_taskcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetTasksQueryParams:
    assignee: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee', 'style': 'form', 'explode': True }})
    completed_since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed_since', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    modified_since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_since', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    section: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'section', 'style': 'form', 'explode': True }})
    workspace: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTasks200ApplicationJSON:
    data: Optional[list[shared_taskcompact.TaskCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetTasksRequest:
    query_params: GetTasksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_tasks_200_application_json_object: Optional[GetTasks200ApplicationJSON] = dataclasses.field(default=None)
    
