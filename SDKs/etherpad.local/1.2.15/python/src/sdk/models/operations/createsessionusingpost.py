import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateSessionUsingPostQueryParams:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    valid_until: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'validUntil', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSessionUsingPost200ApplicationJSONData:
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionID') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSessionUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[CreateSessionUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSessionUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSessionUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateSessionUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class CreateSessionUsingPostRequest:
    query_params: CreateSessionUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateSessionUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_session_using_post_200_application_json_object: Optional[CreateSessionUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    create_session_using_post_400_application_json_object: Optional[CreateSessionUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    create_session_using_post_401_application_json_object: Optional[CreateSessionUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    create_session_using_post_500_application_json_object: Optional[CreateSessionUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    
