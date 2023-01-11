import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import modifydependentsrequest as shared_modifydependentsrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class RemoveDependentsForTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveDependentsForTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveDependentsForTaskRequestBody:
    data: Optional[shared_modifydependentsrequest.ModifyDependentsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class RemoveDependentsForTask200ApplicationJSON:
    data: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class RemoveDependentsForTaskRequest:
    path_params: RemoveDependentsForTaskPathParams = dataclasses.field()
    query_params: RemoveDependentsForTaskQueryParams = dataclasses.field()
    request: RemoveDependentsForTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveDependentsForTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    remove_dependents_for_task_200_application_json_object: Optional[RemoveDependentsForTask200ApplicationJSON] = dataclasses.field(default=None)
    
