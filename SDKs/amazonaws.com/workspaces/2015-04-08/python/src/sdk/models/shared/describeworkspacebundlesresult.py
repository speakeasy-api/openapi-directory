import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspacebundle as shared_workspacebundle


@dataclass_json
@dataclasses.dataclass
class DescribeWorkspaceBundlesResult:
    bundles: Optional[list[shared_workspacebundle.WorkspaceBundle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bundles') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
