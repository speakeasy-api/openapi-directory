import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScheduleAByEmployer:
    committee_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committee_id') }})
    cycle: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    employer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employer') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
