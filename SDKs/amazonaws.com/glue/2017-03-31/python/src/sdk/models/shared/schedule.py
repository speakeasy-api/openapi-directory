import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schedulestate_enum as shared_schedulestate_enum


@dataclass_json
@dataclasses.dataclass
class Schedule:
    r"""Schedule
    A scheduling object using a <code>cron</code> statement to schedule an event.
    """
    
    schedule_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScheduleExpression') }})
    state: Optional[shared_schedulestate_enum.ScheduleStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
