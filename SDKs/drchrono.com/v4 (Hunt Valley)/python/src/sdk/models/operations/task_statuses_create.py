import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskstatus as shared_taskstatus


@dataclasses.dataclass
class TaskStatusesCreateQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskStatusesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskStatusesCreateRequest:
    query_params: TaskStatusesCreateQueryParams = dataclasses.field()
    security: TaskStatusesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskStatusesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_status: Optional[shared_taskstatus.TaskStatus] = dataclasses.field(default=None)
    
