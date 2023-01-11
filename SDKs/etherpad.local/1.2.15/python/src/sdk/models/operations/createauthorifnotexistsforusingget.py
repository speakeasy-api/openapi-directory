import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingGetQueryParams:
    author_mapper: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'authorMapper', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingGet200ApplicationJSONData:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[CreateAuthorIfNotExistsForUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingGetRequest:
    query_params: CreateAuthorIfNotExistsForUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_author_if_not_exists_for_using_get_200_application_json_object: Optional[CreateAuthorIfNotExistsForUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    create_author_if_not_exists_for_using_get_400_application_json_object: Optional[CreateAuthorIfNotExistsForUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    create_author_if_not_exists_for_using_get_401_application_json_object: Optional[CreateAuthorIfNotExistsForUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    create_author_if_not_exists_for_using_get_500_application_json_object: Optional[CreateAuthorIfNotExistsForUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
