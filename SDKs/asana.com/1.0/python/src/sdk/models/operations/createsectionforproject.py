import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sectionrequest as shared_sectionrequest
from ..shared import sectionresponse as shared_sectionresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateSectionForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSectionForProjectQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSectionForProjectRequestBody:
    data: Optional[shared_sectionrequest.SectionRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSectionForProject201ApplicationJSON:
    data: Optional[shared_sectionresponse.SectionResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateSectionForProjectRequest:
    path_params: CreateSectionForProjectPathParams = dataclasses.field()
    query_params: CreateSectionForProjectQueryParams = dataclasses.field()
    request: CreateSectionForProjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateSectionForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_section_for_project_201_application_json_object: Optional[CreateSectionForProject201ApplicationJSON] = dataclasses.field(default=None)
    
