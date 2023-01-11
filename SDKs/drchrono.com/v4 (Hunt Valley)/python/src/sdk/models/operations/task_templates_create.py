import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import tasktemplate as shared_tasktemplate


@dataclasses.dataclass
class TaskTemplatesCreateQueryParams:
    assignee_group: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_group', 'style': 'form', 'explode': True }})
    assignee_user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_user', 'style': 'form', 'explode': True }})
    category: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskTemplatesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskTemplatesCreateRequest:
    query_params: TaskTemplatesCreateQueryParams = dataclasses.field()
    security: TaskTemplatesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_template: Optional[shared_tasktemplate.TaskTemplate] = dataclasses.field(default=None)
    
