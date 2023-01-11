import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemoveTargetsRequest:
    ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ids') }})
    rule: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rule') }})
    event_bus_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBusName') }})
    force: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Force') }})
    
