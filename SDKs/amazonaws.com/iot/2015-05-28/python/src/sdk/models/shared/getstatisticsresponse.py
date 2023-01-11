import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statistics as shared_statistics


@dataclass_json
@dataclasses.dataclass
class GetStatisticsResponse:
    statistics: Optional[shared_statistics.Statistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    
