import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PadUsersCountUsingPostQueryParams:
    pad_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingPost200ApplicationJSONData:
    pad_users_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padUsersCount') }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[PadUsersCountUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PadUsersCountUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PadUsersCountUsingPostRequest:
    query_params: PadUsersCountUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PadUsersCountUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pad_users_count_using_post_200_application_json_object: Optional[PadUsersCountUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    pad_users_count_using_post_400_application_json_object: Optional[PadUsersCountUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    pad_users_count_using_post_401_application_json_object: Optional[PadUsersCountUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    pad_users_count_using_post_500_application_json_object: Optional[PadUsersCountUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    
