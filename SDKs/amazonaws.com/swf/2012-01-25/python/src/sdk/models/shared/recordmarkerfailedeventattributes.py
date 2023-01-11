import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recordmarkerfailedcause_enum as shared_recordmarkerfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class RecordMarkerFailedEventAttributes:
    r"""RecordMarkerFailedEventAttributes
    Provides the details of the <code>RecordMarkerFailed</code> event.
    """
    
    cause: shared_recordmarkerfailedcause_enum.RecordMarkerFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    marker_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('markerName') }})
    
