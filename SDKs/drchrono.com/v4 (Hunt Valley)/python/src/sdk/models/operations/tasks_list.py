import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import task as shared_task


@dataclasses.dataclass
class TasksListQueryParams:
    assignee_group: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_group', 'style': 'form', 'explode': True }})
    assignee_user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_user', 'style': 'form', 'explode': True }})
    category: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    due_at_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_date', 'style': 'form', 'explode': True }})
    due_at_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_range', 'style': 'form', 'explode': True }})
    due_at_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_since', 'style': 'form', 'explode': True }})
    due_at_unknown: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_unknown', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TasksListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TasksList200ApplicationJSON:
    r"""TasksList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_task.Task]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class TasksListRequest:
    query_params: TasksListQueryParams = dataclasses.field()
    security: TasksListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TasksListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tasks_list_200_application_json_object: Optional[TasksList200ApplicationJSON] = dataclasses.field(default=None)
    
