import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import taskcategory as shared_taskcategory


@dataclasses.dataclass
class TaskCategoriesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskCategoriesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TaskCategoriesList200ApplicationJSON:
    r"""TaskCategoriesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_taskcategory.TaskCategory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class TaskCategoriesListRequest:
    query_params: TaskCategoriesListQueryParams = dataclasses.field()
    security: TaskCategoriesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskCategoriesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_categories_list_200_application_json_object: Optional[TaskCategoriesList200ApplicationJSON] = dataclasses.field(default=None)
    
