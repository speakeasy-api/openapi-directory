import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceshareinvitation as shared_resourceshareinvitation


@dataclass_json
@dataclasses.dataclass
class GetResourceShareInvitationsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    resource_share_invitations: Optional[list[shared_resourceshareinvitation.ResourceShareInvitation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareInvitations') }})
    
