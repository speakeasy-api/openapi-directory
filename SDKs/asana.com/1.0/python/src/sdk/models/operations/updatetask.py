import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskrequest as shared_taskrequest
from ..shared import taskresponse as shared_taskresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class UpdateTaskPathParams:
    task_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'task_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTaskQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateTaskRequestBodyInput:
    data: Optional[shared_taskrequest.TaskRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateTask200ApplicationJSON:
    data: Optional[shared_taskresponse.TaskResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = dataclasses.field()
    query_params: UpdateTaskQueryParams = dataclasses.field()
    request: UpdateTaskRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    update_task_200_application_json_object: Optional[UpdateTask200ApplicationJSON] = dataclasses.field(default=None)
    
