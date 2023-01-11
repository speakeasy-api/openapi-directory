import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAuthorNameUsingPostQueryParams:
    author_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingPost200ApplicationJSONDataInfo:
    color_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorId') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timestamp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingPost200ApplicationJSONData:
    info: Optional[GetAuthorNameUsingPost200ApplicationJSONDataInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingPost200ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetAuthorNameUsingPost200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingPost400ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingPost401ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAuthorNameUsingPost500ApplicationJSON:
    code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetAuthorNameUsingPostRequest:
    query_params: GetAuthorNameUsingPostQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthorNameUsingPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_author_name_using_post_200_application_json_object: Optional[GetAuthorNameUsingPost200ApplicationJSON] = dataclasses.field(default=None)
    get_author_name_using_post_400_application_json_object: Optional[GetAuthorNameUsingPost400ApplicationJSON] = dataclasses.field(default=None)
    get_author_name_using_post_401_application_json_object: Optional[GetAuthorNameUsingPost401ApplicationJSON] = dataclasses.field(default=None)
    get_author_name_using_post_500_application_json_object: Optional[GetAuthorNameUsingPost500ApplicationJSON] = dataclasses.field(default=None)
    
