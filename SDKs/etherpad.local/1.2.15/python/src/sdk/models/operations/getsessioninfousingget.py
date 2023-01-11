import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetSessionInfoUsingGetQueryParams:
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sessionID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSessionInfoUsingGet200ApplicationJSONDataInfo:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    valid_until: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSessionInfoUsingGet200ApplicationJSONData:
    info: Optional[GetSessionInfoUsingGet200ApplicationJSONDataInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSessionInfoUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetSessionInfoUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSessionInfoUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSessionInfoUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetSessionInfoUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetSessionInfoUsingGetRequest:
    query_params: GetSessionInfoUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSessionInfoUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_session_info_using_get_200_application_json_object: Optional[GetSessionInfoUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    get_session_info_using_get_400_application_json_object: Optional[GetSessionInfoUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    get_session_info_using_get_401_application_json_object: Optional[GetSessionInfoUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    get_session_info_using_get_500_application_json_object: Optional[GetSessionInfoUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
