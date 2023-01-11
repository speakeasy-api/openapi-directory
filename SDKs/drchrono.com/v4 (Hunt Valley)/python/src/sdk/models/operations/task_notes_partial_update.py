import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TaskNotesPartialUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaskNotesPartialUpdateQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    task: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'task', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskNotesPartialUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskNotesPartialUpdateRequest:
    path_params: TaskNotesPartialUpdatePathParams = dataclasses.field()
    query_params: TaskNotesPartialUpdateQueryParams = dataclasses.field()
    security: TaskNotesPartialUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskNotesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
