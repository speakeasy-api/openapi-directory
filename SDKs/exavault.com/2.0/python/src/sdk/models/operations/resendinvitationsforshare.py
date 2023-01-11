import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sharerecipientsresponse as shared_sharerecipientsresponse


@dataclasses.dataclass
class ResendInvitationsForSharePathParams:
    share_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'shareId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResendInvitationsForShareHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ResendInvitationsForShareResendInvitationsRequestBody:
    recipient_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipientId') }})
    

@dataclasses.dataclass
class ResendInvitationsForShareRequest:
    headers: ResendInvitationsForShareHeaders = dataclasses.field()
    path_params: ResendInvitationsForSharePathParams = dataclasses.field()
    request: Optional[ResendInvitationsForShareResendInvitationsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ResendInvitationsForShareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    share_recipients_response: Optional[shared_sharerecipientsresponse.ShareRecipientsResponse] = dataclasses.field(default=None)
    
