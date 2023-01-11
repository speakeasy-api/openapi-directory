import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import tasknote as shared_tasknote


@dataclasses.dataclass
class TaskNotesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaskNotesReadQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    task: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'task', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskNotesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskNotesReadRequest:
    path_params: TaskNotesReadPathParams = dataclasses.field()
    query_params: TaskNotesReadQueryParams = dataclasses.field()
    security: TaskNotesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskNotesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_note: Optional[shared_tasknote.TaskNote] = dataclasses.field(default=None)
    
