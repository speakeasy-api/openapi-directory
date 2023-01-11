import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AllEnvironments200ApplicationJSONEnvironments:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class AllEnvironments200ApplicationJSON:
    environments: Optional[list[AllEnvironments200ApplicationJSONEnvironments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    

@dataclasses.dataclass
class AllEnvironmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    all_environments_200_application_json_object: Optional[AllEnvironments200ApplicationJSON] = dataclasses.field(default=None)
    
