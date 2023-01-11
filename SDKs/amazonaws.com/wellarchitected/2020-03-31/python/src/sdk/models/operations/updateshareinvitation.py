import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updateshareinvitationoutput as shared_updateshareinvitationoutput


@dataclasses.dataclass
class UpdateShareInvitationPathParams:
    share_invitation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ShareInvitationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateShareInvitationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateShareInvitationRequestBodyShareInvitationActionEnum(str, Enum):
    ACCEPT = "ACCEPT"
    REJECT = "REJECT"


@dataclass_json
@dataclasses.dataclass
class UpdateShareInvitationRequestBody:
    share_invitation_action: UpdateShareInvitationRequestBodyShareInvitationActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShareInvitationAction') }})
    

@dataclasses.dataclass
class UpdateShareInvitationRequest:
    headers: UpdateShareInvitationHeaders = dataclasses.field()
    path_params: UpdateShareInvitationPathParams = dataclasses.field()
    request: UpdateShareInvitationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateShareInvitationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_share_invitation_output: Optional[shared_updateshareinvitationoutput.UpdateShareInvitationOutput] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
