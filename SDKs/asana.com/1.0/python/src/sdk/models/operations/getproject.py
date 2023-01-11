import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectresponse as shared_projectresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetProject200ApplicationJSON:
    data: Optional[shared_projectresponse.ProjectResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetProjectRequest:
    path_params: GetProjectPathParams = dataclasses.field()
    query_params: GetProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_project_200_application_json_object: Optional[GetProject200ApplicationJSON] = dataclasses.field(default=None)
    
