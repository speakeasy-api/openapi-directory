import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MonthlySchedule:
    r"""MonthlySchedule
    Specifies a monthly recurrence pattern for running a classification job.
    """
    
    day_of_month: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfMonth') }})
    
