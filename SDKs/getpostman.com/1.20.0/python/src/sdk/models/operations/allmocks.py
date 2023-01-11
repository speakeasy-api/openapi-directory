import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AllMocks200ApplicationJSONMocks:
    collection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    environment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mock_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mockUrl') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class AllMocks200ApplicationJSON:
    mocks: Optional[list[AllMocks200ApplicationJSONMocks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mocks') }})
    

@dataclasses.dataclass
class AllMocksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    all_mocks_200_application_json_object: Optional[AllMocks200ApplicationJSON] = dataclasses.field(default=None)
    
