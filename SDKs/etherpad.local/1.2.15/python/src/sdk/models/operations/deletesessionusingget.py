import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteSessionUsingGetQueryParams:
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sessionID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteSessionUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteSessionUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteSessionUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteSessionUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class DeleteSessionUsingGetRequest:
    query_params: DeleteSessionUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSessionUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_session_using_get_200_application_json_object: Optional[DeleteSessionUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    delete_session_using_get_400_application_json_object: Optional[DeleteSessionUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    delete_session_using_get_401_application_json_object: Optional[DeleteSessionUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    delete_session_using_get_500_application_json_object: Optional[DeleteSessionUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
