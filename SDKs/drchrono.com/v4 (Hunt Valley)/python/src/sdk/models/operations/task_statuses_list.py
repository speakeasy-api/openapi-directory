import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import taskstatus as shared_taskstatus


@dataclasses.dataclass
class TaskStatusesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskStatusesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TaskStatusesList200ApplicationJSON:
    r"""TaskStatusesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_taskstatus.TaskStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class TaskStatusesListRequest:
    query_params: TaskStatusesListQueryParams = dataclasses.field()
    security: TaskStatusesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskStatusesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_statuses_list_200_application_json_object: Optional[TaskStatusesList200ApplicationJSON] = dataclasses.field(default=None)
    
