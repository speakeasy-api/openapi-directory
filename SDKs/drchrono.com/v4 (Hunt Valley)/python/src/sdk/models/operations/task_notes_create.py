import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import tasknote as shared_tasknote


@dataclasses.dataclass
class TaskNotesCreateQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    task: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'task', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskNotesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskNotesCreateRequest:
    query_params: TaskNotesCreateQueryParams = dataclasses.field()
    security: TaskNotesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskNotesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_note: Optional[shared_tasknote.TaskNote] = dataclasses.field(default=None)
    
