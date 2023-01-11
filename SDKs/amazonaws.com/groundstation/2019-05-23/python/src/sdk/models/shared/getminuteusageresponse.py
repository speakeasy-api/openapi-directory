import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetMinuteUsageResponse:
    r"""GetMinuteUsageResponse
    <p/>
    """
    
    estimated_minutes_remaining: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedMinutesRemaining') }})
    is_reserved_minutes_customer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReservedMinutesCustomer') }})
    total_reserved_minute_allocation: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReservedMinuteAllocation') }})
    total_scheduled_minutes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalScheduledMinutes') }})
    upcoming_minutes_scheduled: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upcomingMinutesScheduled') }})
    
