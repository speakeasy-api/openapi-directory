import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import tasknote as shared_tasknote


@dataclasses.dataclass
class TaskNotesListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    task: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'task', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TaskNotesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class TaskNotesList200ApplicationJSON:
    r"""TaskNotesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_tasknote.TaskNote]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class TaskNotesListRequest:
    query_params: TaskNotesListQueryParams = dataclasses.field()
    security: TaskNotesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TaskNotesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    task_notes_list_200_application_json_object: Optional[TaskNotesList200ApplicationJSON] = dataclasses.field(default=None)
    
