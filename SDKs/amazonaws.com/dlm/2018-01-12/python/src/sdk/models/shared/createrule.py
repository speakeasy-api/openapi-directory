import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import intervalunitvalues_enum as shared_intervalunitvalues_enum
from ..shared import locationvalues_enum as shared_locationvalues_enum


@dataclass_json
@dataclasses.dataclass
class CreateRule:
    r"""CreateRule
    <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
    """
    
    cron_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CronExpression') }})
    interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    interval_unit: Optional[shared_intervalunitvalues_enum.IntervalUnitValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalUnit') }})
    location: Optional[shared_locationvalues_enum.LocationValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    times: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Times') }})
    
