import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteCollectionPathParams:
    collection_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteCollection200ApplicationJSONCollection:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteCollection200ApplicationJSON:
    collection: Optional[DeleteCollection200ApplicationJSONCollection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteCollection404ApplicationJSONErrorDetails:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteCollection404ApplicationJSONError:
    details: Optional[DeleteCollection404ApplicationJSONErrorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteCollection404ApplicationJSON:
    error: Optional[DeleteCollection404ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class DeleteCollectionRequest:
    path_params: DeleteCollectionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCollectionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_collection_200_application_json_object: Optional[DeleteCollection200ApplicationJSON] = dataclasses.field(default=None)
    delete_collection_404_application_json_object: Optional[DeleteCollection404ApplicationJSON] = dataclasses.field(default=None)
    
