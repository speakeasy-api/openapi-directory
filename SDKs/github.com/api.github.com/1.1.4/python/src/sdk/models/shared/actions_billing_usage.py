import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionsBillingUsageMinutesUsedBreakdown:
    macos: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MACOS') }})
    ubuntu: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UBUNTU') }})
    windows: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WINDOWS') }})
    

@dataclass_json
@dataclasses.dataclass
class ActionsBillingUsage:
    included_minutes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('included_minutes') }})
    minutes_used_breakdown: ActionsBillingUsageMinutesUsedBreakdown = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minutes_used_breakdown') }})
    total_minutes_used: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_minutes_used') }})
    total_paid_minutes_used: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_paid_minutes_used') }})
    
