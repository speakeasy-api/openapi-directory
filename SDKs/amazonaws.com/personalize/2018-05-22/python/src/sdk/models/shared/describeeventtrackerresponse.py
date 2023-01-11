import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtracker as shared_eventtracker


@dataclass_json
@dataclasses.dataclass
class DescribeEventTrackerResponse:
    event_tracker: Optional[shared_eventtracker.EventTracker] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTracker') }})
    
