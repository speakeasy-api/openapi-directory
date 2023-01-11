import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectsectioninsertrequest as shared_projectsectioninsertrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class InsertSectionForProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InsertSectionForProjectQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class InsertSectionForProjectRequestBody:
    data: Optional[shared_projectsectioninsertrequest.ProjectSectionInsertRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class InsertSectionForProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class InsertSectionForProjectRequest:
    path_params: InsertSectionForProjectPathParams = dataclasses.field()
    query_params: InsertSectionForProjectQueryParams = dataclasses.field()
    request: InsertSectionForProjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InsertSectionForProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    insert_section_for_project_200_application_json_object: Optional[InsertSectionForProject200ApplicationJSON] = dataclasses.field(default=None)
    
