import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import organization_invitation as shared_organization_invitation
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class OrgsCreateInvitationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsCreateInvitationRequestBodyRoleEnum(str, Enum):
    ADMIN = "admin"
    DIRECT_MEMBER = "direct_member"
    BILLING_MANAGER = "billing_manager"


@dataclass_json
@dataclasses.dataclass
class OrgsCreateInvitationRequestBody:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    invitee_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitee_id') }})
    role: Optional[OrgsCreateInvitationRequestBodyRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    team_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_ids') }})
    

@dataclasses.dataclass
class OrgsCreateInvitationRequest:
    path_params: OrgsCreateInvitationPathParams = dataclasses.field()
    request: Optional[OrgsCreateInvitationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OrgsCreateInvitationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    organization_invitation: Optional[shared_organization_invitation.OrganizationInvitation] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
