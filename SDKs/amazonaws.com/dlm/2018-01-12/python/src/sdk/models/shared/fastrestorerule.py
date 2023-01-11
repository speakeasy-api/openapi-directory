import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retentionintervalunitvalues_enum as shared_retentionintervalunitvalues_enum


@dataclass_json
@dataclasses.dataclass
class FastRestoreRule:
    r"""FastRestoreRule
    Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.
    """
    
    availability_zones: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZones') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    interval_unit: Optional[shared_retentionintervalunitvalues_enum.RetentionIntervalUnitValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalUnit') }})
    
