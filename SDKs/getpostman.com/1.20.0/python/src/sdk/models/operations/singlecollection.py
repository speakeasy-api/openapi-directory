import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SingleCollectionPathParams:
    collection_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSONCollectionInfo:
    postman_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_postman_id') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSONCollectionItemEventScript:
    exec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exec') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSONCollectionItemEvent:
    listen: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listen') }})
    script: Optional[SingleCollection200ApplicationJSONCollectionItemEventScript] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSONCollectionItemRequestBody:
    formdata: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formdata') }})
    mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSONCollectionItemRequestHeader:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSONCollectionItemRequest:
    body: Optional[SingleCollection200ApplicationJSONCollectionItemRequestBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    header: Optional[list[SingleCollection200ApplicationJSONCollectionItemRequestHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSONCollectionItem:
    event: Optional[list[SingleCollection200ApplicationJSONCollectionItemEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request: Optional[SingleCollection200ApplicationJSONCollectionItemRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    response: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSONCollection:
    info: Optional[SingleCollection200ApplicationJSONCollectionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    item: Optional[list[SingleCollection200ApplicationJSONCollectionItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    variables: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variables') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleCollection200ApplicationJSON:
    collection: Optional[SingleCollection200ApplicationJSONCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclasses.dataclass
class SingleCollectionRequest:
    path_params: SingleCollectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SingleCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    single_collection_200_application_json_object: Optional[SingleCollection200ApplicationJSON] = dataclasses.field(default=None)
    
