import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingGetQueryParams:
    group_mapper: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupMapper', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingGet200ApplicationJSONData:
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[CreateGroupIfNotExistsForUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingGetRequest:
    query_params: CreateGroupIfNotExistsForUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateGroupIfNotExistsForUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_group_if_not_exists_for_using_get_200_application_json_object: Optional[CreateGroupIfNotExistsForUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    create_group_if_not_exists_for_using_get_400_application_json_object: Optional[CreateGroupIfNotExistsForUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    create_group_if_not_exists_for_using_get_401_application_json_object: Optional[CreateGroupIfNotExistsForUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    create_group_if_not_exists_for_using_get_500_application_json_object: Optional[CreateGroupIfNotExistsForUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
