import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateAuthorUsingGetQueryParams:
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorUsingGet200ApplicationJSONData:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[CreateAuthorUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CreateAuthorUsingGetRequest:
    query_params: CreateAuthorUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateAuthorUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_author_using_get_200_application_json_object: Optional[CreateAuthorUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    create_author_using_get_400_application_json_object: Optional[CreateAuthorUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    create_author_using_get_401_application_json_object: Optional[CreateAuthorUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    create_author_using_get_500_application_json_object: Optional[CreateAuthorUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
