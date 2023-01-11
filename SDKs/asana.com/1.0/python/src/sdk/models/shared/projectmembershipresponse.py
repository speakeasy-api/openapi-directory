import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectcompact as shared_projectcompact
from ..shared import usercompact as shared_usercompact

class ProjectMembershipResponseWriteAccessEnum(str, Enum):
    FULL_WRITE = "full_write"
    COMMENT_ONLY = "comment_only"


@dataclass_json
@dataclasses.dataclass
class ProjectMembershipResponse:
    r"""ProjectMembershipResponse
    With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    project: Optional[shared_projectcompact.ProjectCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    user: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    write_access: Optional[ProjectMembershipResponseWriteAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('write_access') }})
    
