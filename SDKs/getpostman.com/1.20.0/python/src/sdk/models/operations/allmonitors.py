import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AllMonitors200ApplicationJSONMonitors:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class AllMonitors200ApplicationJSON:
    monitors: Optional[list[AllMonitors200ApplicationJSONMonitors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitors') }})
    

@dataclasses.dataclass
class AllMonitorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    all_monitors_200_application_json_object: Optional[AllMonitors200ApplicationJSON] = dataclasses.field(default=None)
    
