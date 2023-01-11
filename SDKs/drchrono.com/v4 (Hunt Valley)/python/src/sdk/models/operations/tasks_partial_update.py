import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TasksPartialUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TasksPartialUpdateQueryParams:
    assignee_group: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_group', 'style': 'form', 'explode': True }})
    assignee_user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_user', 'style': 'form', 'explode': True }})
    category: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    due_at_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_date', 'style': 'form', 'explode': True }})
    due_at_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_range', 'style': 'form', 'explode': True }})
    due_at_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_since', 'style': 'form', 'explode': True }})
    due_at_unknown: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at_unknown', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TasksPartialUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TasksPartialUpdateRequest:
    path_params: TasksPartialUpdatePathParams = dataclasses.field()
    query_params: TasksPartialUpdateQueryParams = dataclasses.field()
    security: TasksPartialUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TasksPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
