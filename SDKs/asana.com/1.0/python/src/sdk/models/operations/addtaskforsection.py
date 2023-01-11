import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sectiontaskinsertrequest as shared_sectiontaskinsertrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class AddTaskForSectionPathParams:
    section_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'section_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddTaskForSectionQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AddTaskForSectionRequestBody:
    data: Optional[shared_sectiontaskinsertrequest.SectionTaskInsertRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class AddTaskForSection200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class AddTaskForSectionRequest:
    path_params: AddTaskForSectionPathParams = dataclasses.field()
    query_params: AddTaskForSectionQueryParams = dataclasses.field()
    request: AddTaskForSectionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddTaskForSectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    add_task_for_section_200_application_json_object: Optional[AddTaskForSection200ApplicationJSON] = dataclasses.field(default=None)
    
