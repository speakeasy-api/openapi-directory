import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retentionintervalunitvalues_enum as shared_retentionintervalunitvalues_enum


@dataclass_json
@dataclasses.dataclass
class CrossRegionCopyRetainRule:
    r"""CrossRegionCopyRetainRule
    Specifies the retention rule for cross-Region snapshot copies.
    """
    
    interval: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Interval') }})
    interval_unit: Optional[shared_retentionintervalunitvalues_enum.RetentionIntervalUnitValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalUnit') }})
    
