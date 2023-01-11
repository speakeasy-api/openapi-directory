import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MarkerRecordedEventAttributes:
    r"""MarkerRecordedEventAttributes
    Provides the details of the <code>MarkerRecorded</code> event.
    """
    
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    marker_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('markerName') }})
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
