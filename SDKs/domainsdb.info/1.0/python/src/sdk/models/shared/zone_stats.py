import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import zone_statistics as shared_zone_statistics


@dataclass_json
@dataclasses.dataclass
class ZoneStats:
    time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    next_page: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    statistics: Optional[list[shared_zone_statistics.ZoneStatistics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
