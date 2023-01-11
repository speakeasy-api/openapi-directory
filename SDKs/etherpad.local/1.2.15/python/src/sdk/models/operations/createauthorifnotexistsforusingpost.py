import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingPostQueryParams:
    author_mapper: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'authorMapper', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingPost200ApplicationJSONData:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[CreateAuthorIfNotExistsForUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingPostRequest:
    query_params: CreateAuthorIfNotExistsForUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateAuthorIfNotExistsForUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_author_if_not_exists_for_using_post_200_application_json_object: Optional[CreateAuthorIfNotExistsForUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    create_author_if_not_exists_for_using_post_400_application_json_object: Optional[CreateAuthorIfNotExistsForUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    create_author_if_not_exists_for_using_post_401_application_json_object: Optional[CreateAuthorIfNotExistsForUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    create_author_if_not_exists_for_using_post_500_application_json_object: Optional[CreateAuthorIfNotExistsForUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    
