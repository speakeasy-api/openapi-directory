import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import tasktemplate as shared_tasktemplate


@dataclasses.dataclass
class TaskTemplatesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaskTemplatesReadQueryParams:
    assignee_group: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_group', 'style': 'form', 'explode': True }})
    assignee_user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_user', 'style': 'form', 'explode': True }})
    category: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskTemplatesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskTemplatesReadRequest:
    path_params: TaskTemplatesReadPathParams = dataclasses.field()
    query_params: TaskTemplatesReadQueryParams = dataclasses.field()
    security: TaskTemplatesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_template: Optional[shared_tasktemplate.TaskTemplate] = dataclasses.field(default=None)
    
