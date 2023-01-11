import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DeleteProjectStatusPathParams:
    project_status_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_status_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProjectStatusQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteProjectStatus200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class DeleteProjectStatusRequest:
    path_params: DeleteProjectStatusPathParams = dataclasses.field()
    query_params: DeleteProjectStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProjectStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    delete_project_status_200_application_json_object: Optional[DeleteProjectStatus200ApplicationJSON] = dataclasses.field(default=None)
    
