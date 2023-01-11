import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import employee as shared_employee
from ..shared import schedule as shared_schedule


@dataclass_json
@dataclasses.dataclass
class EmployeeSchedules:
    employee: Optional[shared_employee.Employee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    schedules: Optional[list[shared_schedule.Schedule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedules') }})
    
