import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TeamMembershipRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclasses.dataclass
class TeamMembership:
    r"""TeamMembership
    Team Membership
    """
    
    role: TeamMembershipRoleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
