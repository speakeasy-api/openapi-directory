import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProjectCollaboratorInviteRoleNameEnum(str, Enum):
    VIEWER = "viewer"
    COLLABORATOR = "collaborator"


@dataclass_json
@dataclasses.dataclass
class ProjectCollaboratorInvite:
    role_name: ProjectCollaboratorInviteRoleNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role_name') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
