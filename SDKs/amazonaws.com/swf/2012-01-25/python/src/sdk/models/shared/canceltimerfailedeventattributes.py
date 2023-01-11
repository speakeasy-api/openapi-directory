import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canceltimerfailedcause_enum as shared_canceltimerfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class CancelTimerFailedEventAttributes:
    r"""CancelTimerFailedEventAttributes
    Provides the details of the <code>CancelTimerFailed</code> event.
    """
    
    cause: shared_canceltimerfailedcause_enum.CancelTimerFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    timer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timerId') }})
    
