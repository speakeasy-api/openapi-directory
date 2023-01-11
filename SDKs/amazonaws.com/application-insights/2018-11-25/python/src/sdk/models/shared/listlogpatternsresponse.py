import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logpattern as shared_logpattern


@dataclass_json
@dataclasses.dataclass
class ListLogPatternsResponse:
    log_patterns: Optional[list[shared_logpattern.LogPattern]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogPatterns') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    
