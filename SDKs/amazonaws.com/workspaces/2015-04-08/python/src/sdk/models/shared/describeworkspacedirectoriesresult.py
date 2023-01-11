import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacedirectory as shared_workspacedirectory


@dataclass_json
@dataclasses.dataclass
class DescribeWorkspaceDirectoriesResult:
    directories: Optional[list[shared_workspacedirectory.WorkspaceDirectory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Directories') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
