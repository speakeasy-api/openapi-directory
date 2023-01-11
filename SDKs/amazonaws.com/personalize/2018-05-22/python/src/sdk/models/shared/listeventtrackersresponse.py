import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtrackersummary as shared_eventtrackersummary


@dataclass_json
@dataclasses.dataclass
class ListEventTrackersResponse:
    event_trackers: Optional[list[shared_eventtrackersummary.EventTrackerSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrackers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
