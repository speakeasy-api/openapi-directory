import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActivityTaskCanceledEventAttributes:
    r"""ActivityTaskCanceledEventAttributes
    Provides the details of the <code>ActivityTaskCanceled</code> event.
    """
    
    scheduled_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    latest_cancel_requested_event_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCancelRequestedEventId') }})
    
