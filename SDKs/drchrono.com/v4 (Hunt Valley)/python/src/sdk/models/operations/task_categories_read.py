import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskcategory as shared_taskcategory


@dataclasses.dataclass
class TaskCategoriesReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TaskCategoriesReadQueryParams:
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskCategoriesReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TaskCategoriesReadRequest:
    path_params: TaskCategoriesReadPathParams = dataclasses.field()
    query_params: TaskCategoriesReadQueryParams = dataclasses.field()
    security: TaskCategoriesReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskCategoriesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_category: Optional[shared_taskcategory.TaskCategory] = dataclasses.field(default=None)
    
