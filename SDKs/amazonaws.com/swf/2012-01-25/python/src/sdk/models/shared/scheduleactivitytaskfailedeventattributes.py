import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activitytype as shared_activitytype
from ..shared import scheduleactivitytaskfailedcause_enum as shared_scheduleactivitytaskfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class ScheduleActivityTaskFailedEventAttributes:
    r"""ScheduleActivityTaskFailedEventAttributes
    Provides the details of the <code>ScheduleActivityTaskFailed</code> event.
    """
    
    activity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityId') }})
    activity_type: shared_activitytype.ActivityType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    cause: shared_scheduleactivitytaskfailedcause_enum.ScheduleActivityTaskFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
