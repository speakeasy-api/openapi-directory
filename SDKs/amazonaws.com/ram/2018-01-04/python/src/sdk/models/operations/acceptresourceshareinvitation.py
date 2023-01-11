import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acceptresourceshareinvitationresponse as shared_acceptresourceshareinvitationresponse


@dataclasses.dataclass
class AcceptResourceShareInvitationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AcceptResourceShareInvitationRequestBody:
    resource_share_invitation_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceShareInvitationArn') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    

@dataclasses.dataclass
class AcceptResourceShareInvitationRequest:
    headers: AcceptResourceShareInvitationHeaders = dataclasses.field()
    request: AcceptResourceShareInvitationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AcceptResourceShareInvitationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accept_resource_share_invitation_response: Optional[shared_acceptresourceshareinvitationresponse.AcceptResourceShareInvitationResponse] = dataclasses.field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_client_token_exception: Optional[Any] = dataclasses.field(default=None)
    malformed_arn_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    resource_share_invitation_already_accepted_exception: Optional[Any] = dataclasses.field(default=None)
    resource_share_invitation_already_rejected_exception: Optional[Any] = dataclasses.field(default=None)
    resource_share_invitation_arn_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    resource_share_invitation_expired_exception: Optional[Any] = dataclasses.field(default=None)
    server_internal_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
