import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dayofweek_enum as shared_dayofweek_enum


@dataclass_json
@dataclasses.dataclass
class WeeklySchedule:
    r"""WeeklySchedule
    Specifies a weekly recurrence pattern for running a classification job.
    """
    
    day_of_week: Optional[shared_dayofweek_enum.DayOfWeekEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    
