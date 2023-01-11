import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConnectionScheduleTimeUnitEnum(str, Enum):
    MINUTES = "minutes"
    HOURS = "hours"
    DAYS = "days"
    WEEKS = "weeks"
    MONTHS = "months"


@dataclass_json
@dataclasses.dataclass
class ConnectionSchedule:
    r"""ConnectionSchedule
    if null, then no schedule is set.
    """
    
    time_unit: ConnectionScheduleTimeUnitEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnit') }})
    units: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    
