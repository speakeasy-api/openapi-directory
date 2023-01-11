import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AllCollections200ApplicationJSONCollections:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class AllCollections200ApplicationJSON:
    collections: Optional[list[AllCollections200ApplicationJSONCollections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    

@dataclasses.dataclass
class AllCollectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    all_collections_200_application_json_object: Optional[AllCollections200ApplicationJSON] = dataclasses.field(default=None)
    
