import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import joblog as shared_joblog


@dataclass_json
@dataclasses.dataclass
class DescribeJobLogItemsResponse:
    items: Optional[list[shared_joblog.JobLog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
