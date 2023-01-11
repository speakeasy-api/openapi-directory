import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListSessionsOfAuthorUsingGetQueryParams:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    valid_until: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSessionsOfAuthorUsingGet200ApplicationJSONData:
    sessions: Optional[list[ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessions') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSessionsOfAuthorUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListSessionsOfAuthorUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSessionsOfAuthorUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSessionsOfAuthorUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSessionsOfAuthorUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ListSessionsOfAuthorUsingGetRequest:
    query_params: ListSessionsOfAuthorUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSessionsOfAuthorUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sessions_of_author_using_get_200_application_json_object: Optional[ListSessionsOfAuthorUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    list_sessions_of_author_using_get_400_application_json_object: Optional[ListSessionsOfAuthorUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    list_sessions_of_author_using_get_401_application_json_object: Optional[ListSessionsOfAuthorUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    list_sessions_of_author_using_get_500_application_json_object: Optional[ListSessionsOfAuthorUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
