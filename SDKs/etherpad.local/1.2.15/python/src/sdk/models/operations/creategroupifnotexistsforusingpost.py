import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPostQueryParams:
    group_mapper: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupMapper', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPost200ApplicationJSONData:
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[CreateGroupIfNotExistsForUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPostRequest:
    query_params: CreateGroupIfNotExistsForUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_group_if_not_exists_for_using_post_200_application_json_object: Optional[CreateGroupIfNotExistsForUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    create_group_if_not_exists_for_using_post_400_application_json_object: Optional[CreateGroupIfNotExistsForUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    create_group_if_not_exists_for_using_post_401_application_json_object: Optional[CreateGroupIfNotExistsForUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    create_group_if_not_exists_for_using_post_500_application_json_object: Optional[CreateGroupIfNotExistsForUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    
