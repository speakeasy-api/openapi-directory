import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventbus as shared_eventbus


@dataclass_json
@dataclasses.dataclass
class ListEventBusesResponse:
    event_buses: Optional[list[shared_eventbus.EventBus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventBuses') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
