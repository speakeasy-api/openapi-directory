import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacesipgroup as shared_workspacesipgroup


@dataclass_json
@dataclasses.dataclass
class DescribeIPGroupsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    result: Optional[list[shared_workspacesipgroup.WorkspacesIPGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Result') }})
    
