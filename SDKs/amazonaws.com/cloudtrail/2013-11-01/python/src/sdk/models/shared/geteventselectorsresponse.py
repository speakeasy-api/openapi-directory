import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import advancedeventselector as shared_advancedeventselector
from ..shared import eventselector as shared_eventselector


@dataclass_json
@dataclasses.dataclass
class GetEventSelectorsResponse:
    advanced_event_selectors: Optional[list[shared_advancedeventselector.AdvancedEventSelector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdvancedEventSelectors') }})
    event_selectors: Optional[list[shared_eventselector.EventSelector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSelectors') }})
    trail_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrailARN') }})
    
