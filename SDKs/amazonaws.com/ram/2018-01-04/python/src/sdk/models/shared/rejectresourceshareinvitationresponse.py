import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceshareinvitation as shared_resourceshareinvitation


@dataclass_json
@dataclasses.dataclass
class RejectResourceShareInvitationResponse:
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    resource_share_invitation: Optional[shared_resourceshareinvitation.ResourceShareInvitation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareInvitation') }})
    
