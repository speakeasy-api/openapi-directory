import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import tasktemplate as shared_tasktemplate


@dataclasses.dataclass
class TaskTemplatesListQueryParams:
    assignee_group: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_group', 'style': 'form', 'explode': True }})
    assignee_user: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee_user', 'style': 'form', 'explode': True }})
    category: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskTemplatesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TaskTemplatesList200ApplicationJSON:
    r"""TaskTemplatesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_tasktemplate.TaskTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class TaskTemplatesListRequest:
    query_params: TaskTemplatesListQueryParams = dataclasses.field()
    security: TaskTemplatesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskTemplatesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_templates_list_200_application_json_object: Optional[TaskTemplatesList200ApplicationJSON] = dataclasses.field(default=None)
    
