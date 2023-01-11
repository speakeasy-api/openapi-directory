import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAuthorNameUsingGetQueryParams:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingGet200ApplicationJSONDataInfo:
    color_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorId') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingGet200ApplicationJSONData:
    info: Optional[GetAuthorNameUsingGet200ApplicationJSONDataInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingGet200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetAuthorNameUsingGet200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingGet400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingGet401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingGet500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetAuthorNameUsingGetRequest:
    query_params: GetAuthorNameUsingGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthorNameUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_author_name_using_get_200_application_json_object: Optional[GetAuthorNameUsingGet200ApplicationJSON] = dataclasses.field(default=None)
    get_author_name_using_get_400_application_json_object: Optional[GetAuthorNameUsingGet400ApplicationJSON] = dataclasses.field(default=None)
    get_author_name_using_get_401_application_json_object: Optional[GetAuthorNameUsingGet401ApplicationJSON] = dataclasses.field(default=None)
    get_author_name_using_get_500_application_json_object: Optional[GetAuthorNameUsingGet500ApplicationJSON] = dataclasses.field(default=None)
    
