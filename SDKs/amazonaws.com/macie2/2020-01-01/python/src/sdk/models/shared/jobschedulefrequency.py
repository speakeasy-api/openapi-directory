import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import monthlyschedule as shared_monthlyschedule
from ..shared import weeklyschedule as shared_weeklyschedule


@dataclass_json
@dataclasses.dataclass
class JobScheduleFrequency:
    r"""JobScheduleFrequency
    Specifies the recurrence pattern for running a classification job.
    """
    
    daily_schedule: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailySchedule') }})
    monthly_schedule: Optional[shared_monthlyschedule.MonthlySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlySchedule') }})
    weekly_schedule: Optional[shared_weeklyschedule.WeeklySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklySchedule') }})
    
