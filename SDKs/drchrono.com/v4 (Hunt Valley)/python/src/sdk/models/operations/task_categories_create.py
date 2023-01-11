import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskcategory as shared_taskcategory


@dataclasses.dataclass
class TaskCategoriesCreateQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskCategoriesCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskCategoriesCreateRequest:
    query_params: TaskCategoriesCreateQueryParams = dataclasses.field()
    security: TaskCategoriesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskCategoriesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_category: Optional[shared_taskcategory.TaskCategory] = dataclasses.field(default=None)
    
