import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import requestcancelactivitytaskfailedcause_enum as shared_requestcancelactivitytaskfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class RequestCancelActivityTaskFailedEventAttributes:
    r"""RequestCancelActivityTaskFailedEventAttributes
    Provides the details of the <code>RequestCancelActivityTaskFailed</code> event.
    """
    
    activity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityId') }})
    cause: shared_requestcancelactivitytaskfailedcause_enum.RequestCancelActivityTaskFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
