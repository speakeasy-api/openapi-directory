import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagerecord as shared_usagerecord
from ..shared import timerange_enum as shared_timerange_enum


@dataclass_json
@dataclasses.dataclass
class GetUsageStatisticsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    records: Optional[list[shared_usagerecord.UsageRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('records') }})
    time_range: Optional[shared_timerange_enum.TimeRangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    
