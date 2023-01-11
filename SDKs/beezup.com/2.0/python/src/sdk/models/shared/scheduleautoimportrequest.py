import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScheduleAutoImportRequest:
    r"""ScheduleAutoImportRequest
    The message request to schedule the auto import
    """
    
    schedules: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedules') }})
    local_time_zone_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localTimeZoneName') }})
    
