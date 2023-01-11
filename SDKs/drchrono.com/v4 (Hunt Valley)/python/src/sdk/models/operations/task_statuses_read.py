import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskstatus as shared_taskstatus


@dataclasses.dataclass
class TaskStatusesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaskStatusesReadQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskStatusesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskStatusesReadRequest:
    path_params: TaskStatusesReadPathParams = dataclasses.field()
    query_params: TaskStatusesReadQueryParams = dataclasses.field()
    security: TaskStatusesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskStatusesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_status: Optional[shared_taskstatus.TaskStatus] = dataclasses.field(default=None)
    
