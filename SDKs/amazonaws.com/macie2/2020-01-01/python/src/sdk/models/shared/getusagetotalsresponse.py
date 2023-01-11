import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timerange_enum as shared_timerange_enum
from ..shared import usagetotal as shared_usagetotal


@dataclass_json
@dataclasses.dataclass
class GetUsageTotalsResponse:
    time_range: Optional[shared_timerange_enum.TimeRangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    usage_totals: Optional[list[shared_usagetotal.UsageTotal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageTotals') }})
    
