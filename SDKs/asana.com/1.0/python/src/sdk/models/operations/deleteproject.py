import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DeleteProjectPathParams:
    project_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProjectQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteProject200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class DeleteProjectRequest:
    path_params: DeleteProjectPathParams = dataclasses.field()
    query_params: DeleteProjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    delete_project_200_application_json_object: Optional[DeleteProject200ApplicationJSON] = dataclasses.field(default=None)
    
