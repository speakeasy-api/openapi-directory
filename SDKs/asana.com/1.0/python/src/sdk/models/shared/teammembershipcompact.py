import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import teamcompact as shared_teamcompact
from ..shared import usercompact as shared_usercompact


@dataclass_json
@dataclasses.dataclass
class TeamMembershipCompact:
    r"""TeamMembershipCompact
    This object represents a user's connection to a team.
    """
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    is_guest: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_guest') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    team: Optional[shared_teamcompact.TeamCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    user: Optional[shared_usercompact.UserCompact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
