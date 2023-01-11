import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TaskTemplatesUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaskTemplatesUpdateQueryParams:
    assignee_group: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_group', 'style': 'form', 'explode': True }})
    assignee_user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_user', 'style': 'form', 'explode': True }})
    category: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskTemplatesUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskTemplatesUpdateRequest:
    path_params: TaskTemplatesUpdatePathParams = dataclasses.field()
    query_params: TaskTemplatesUpdateQueryParams = dataclasses.field()
    security: TaskTemplatesUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskTemplatesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
