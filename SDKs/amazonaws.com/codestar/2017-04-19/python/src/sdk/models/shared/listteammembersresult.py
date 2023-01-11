import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import teammember as shared_teammember


@dataclass_json
@dataclasses.dataclass
class ListTeamMembersResult:
    team_members: list[shared_teammember.TeamMember] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamMembers') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
