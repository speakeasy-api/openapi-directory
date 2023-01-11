import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import seekinfo as shared_seekinfo
from ..shared import scheduleb as shared_scheduleb


@dataclass_json
@dataclasses.dataclass
class ScheduleBPage:
    pagination: Optional[shared_seekinfo.SeekInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[list[shared_scheduleb.ScheduleB]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
