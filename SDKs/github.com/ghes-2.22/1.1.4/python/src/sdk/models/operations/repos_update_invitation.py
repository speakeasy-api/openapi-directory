import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository_invitation as shared_repository_invitation


@dataclasses.dataclass
class ReposUpdateInvitationPathParams:
    invitation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposUpdateInvitationRequestBodyPermissionsEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    MAINTAIN = "maintain"
    TRIAGE = "triage"
    ADMIN = "admin"


@dataclass_json
@dataclasses.dataclass
class ReposUpdateInvitationRequestBody:
    permissions: Optional[ReposUpdateInvitationRequestBodyPermissionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclasses.dataclass
class ReposUpdateInvitationRequest:
    path_params: ReposUpdateInvitationPathParams = dataclasses.field()
    request: Optional[ReposUpdateInvitationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReposUpdateInvitationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    repository_invitation: Optional[shared_repository_invitation.RepositoryInvitation] = dataclasses.field(default=None)
    
