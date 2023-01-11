import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact


@dataclass_json
@dataclasses.dataclass
class ProjectMembershipCompact:
    r"""ProjectMembershipCompact
    With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    user: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
