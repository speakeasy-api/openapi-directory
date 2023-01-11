import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspaceconnectionstatus as shared_workspaceconnectionstatus


@dataclass_json
@dataclasses.dataclass
class DescribeWorkspacesConnectionStatusResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workspaces_connection_status: Optional[list[shared_workspaceconnectionstatus.WorkspaceConnectionStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkspacesConnectionStatus') }})
    
