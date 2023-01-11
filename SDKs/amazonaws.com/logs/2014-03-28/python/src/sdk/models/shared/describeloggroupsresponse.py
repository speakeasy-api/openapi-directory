import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loggroup as shared_loggroup


@dataclass_json
@dataclasses.dataclass
class DescribeLogGroupsResponse:
    log_groups: Optional[list[shared_loggroup.LogGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroups') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
