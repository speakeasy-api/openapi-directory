import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact
from ..shared import workspacecompact as shared_workspacecompact


@dataclass_json
@dataclasses.dataclass
class WorkspaceMembershipCompact:
    r"""WorkspaceMembershipCompact
    This object determines if a user is a member of a workspace.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    user: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    workspace: Optional[shared_workspacecompact.WorkspaceCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
