import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateCollectionPathParams:
    collection_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollectionRequestBodyCollectionInfo:
    postman_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_postman_id') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollectionRequestBodyCollectionItemItemRequestBody:
    mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    raw: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollectionRequestBodyCollectionItemItemRequestHeader:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollectionRequestBodyCollectionItemItemRequest:
    body: Optional[UpdateCollectionRequestBodyCollectionItemItemRequestBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    header: Optional[list[UpdateCollectionRequestBodyCollectionItemItemRequestHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollectionRequestBodyCollectionItemItem:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    request: Optional[UpdateCollectionRequestBodyCollectionItemItemRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollectionRequestBodyCollectionItem:
    item: Optional[list[UpdateCollectionRequestBodyCollectionItemItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollectionRequestBodyCollection:
    info: Optional[UpdateCollectionRequestBodyCollectionInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    item: Optional[list[UpdateCollectionRequestBodyCollectionItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollectionRequestBody:
    collection: Optional[UpdateCollectionRequestBodyCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection200ApplicationJSONCollection:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection200ApplicationJSON:
    collection: Optional[UpdateCollection200ApplicationJSONCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection400ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection400ApplicationJSON:
    error: Optional[UpdateCollection400ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection403ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection403ApplicationJSON:
    error: Optional[UpdateCollection403ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection404ApplicationJSONErrorDetails:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection404ApplicationJSONError:
    details: Optional[UpdateCollection404ApplicationJSONErrorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateCollection404ApplicationJSON:
    error: Optional[UpdateCollection404ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class UpdateCollectionRequest:
    path_params: UpdateCollectionPathParams = dataclasses.field()
    request: Optional[UpdateCollectionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_collection_200_application_json_object: Optional[UpdateCollection200ApplicationJSON] = dataclasses.field(default=None)
    update_collection_400_application_json_object: Optional[UpdateCollection400ApplicationJSON] = dataclasses.field(default=None)
    update_collection_403_application_json_object: Optional[UpdateCollection403ApplicationJSON] = dataclasses.field(default=None)
    update_collection_404_application_json_object: Optional[UpdateCollection404ApplicationJSON] = dataclasses.field(default=None)
    
