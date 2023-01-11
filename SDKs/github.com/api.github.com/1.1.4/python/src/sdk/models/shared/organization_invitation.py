import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simple_user as shared_simple_user


@dataclass_json
@dataclasses.dataclass
class OrganizationInvitation:
    r"""OrganizationInvitation
    Organization Invitation
    """
    
    created_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invitation_team_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitation_team_url') }})
    inviter: shared_simple_user.SimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inviter') }})
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    team_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_count') }})
    failed_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed_at') }})
    failed_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed_reason') }})
    invitation_teams_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitation_teams_url') }})
    
