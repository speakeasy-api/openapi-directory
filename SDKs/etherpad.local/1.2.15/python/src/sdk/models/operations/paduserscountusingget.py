import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PadUsersCountUsingGetQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingGet200ApplicationJSONData:
    pad_users_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padUsersCount') }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[PadUsersCountUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PadUsersCountUsingGetRequest:
    query_params: PadUsersCountUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PadUsersCountUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pad_users_count_using_get_200_application_json_object: Optional[PadUsersCountUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    pad_users_count_using_get_400_application_json_object: Optional[PadUsersCountUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    pad_users_count_using_get_401_application_json_object: Optional[PadUsersCountUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    pad_users_count_using_get_500_application_json_object: Optional[PadUsersCountUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
