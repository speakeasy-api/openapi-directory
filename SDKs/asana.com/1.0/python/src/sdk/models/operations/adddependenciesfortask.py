import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modifydependenciesrequest as shared_modifydependenciesrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class AddDependenciesForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddDependenciesForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AddDependenciesForTaskRequestBody:
    data: Optional[shared_modifydependenciesrequest.ModifyDependenciesRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class AddDependenciesForTask200ApplicationJSON:
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class AddDependenciesForTaskRequest:
    path_params: AddDependenciesForTaskPathParams = dataclasses.field()
    query_params: AddDependenciesForTaskQueryParams = dataclasses.field()
    request: AddDependenciesForTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddDependenciesForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    add_dependencies_for_task_200_application_json_object: Optional[AddDependenciesForTask200ApplicationJSON] = dataclasses.field(default=None)
    
