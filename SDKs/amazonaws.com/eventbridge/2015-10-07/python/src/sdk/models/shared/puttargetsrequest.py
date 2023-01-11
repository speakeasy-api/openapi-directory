import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclass_json
@dataclasses.dataclass
class PutTargetsRequest:
    rule: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rule') }})
    targets: list[shared_target.Target] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    event_bus_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBusName') }})
    
