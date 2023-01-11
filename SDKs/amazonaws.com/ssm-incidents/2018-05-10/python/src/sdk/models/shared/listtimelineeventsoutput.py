import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsummary as shared_eventsummary


@dataclass_json
@dataclasses.dataclass
class ListTimelineEventsOutput:
    event_summaries: list[shared_eventsummary.EventSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
