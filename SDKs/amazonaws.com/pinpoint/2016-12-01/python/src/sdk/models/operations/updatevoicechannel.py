import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatevoicechannelresponse as shared_updatevoicechannelresponse


@dataclasses.dataclass
class UpdateVoiceChannelPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateVoiceChannelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateVoiceChannelRequestBodyVoiceChannelRequest:
    r"""UpdateVoiceChannelRequestBodyVoiceChannelRequest
    Specifies the status and settings of the voice channel for an application.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateVoiceChannelRequestBody:
    voice_channel_request: UpdateVoiceChannelRequestBodyVoiceChannelRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceChannelRequest') }})
    

@dataclasses.dataclass
class UpdateVoiceChannelRequest:
    headers: UpdateVoiceChannelHeaders = dataclasses.field()
    path_params: UpdateVoiceChannelPathParams = dataclasses.field()
    request: UpdateVoiceChannelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateVoiceChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_voice_channel_response: Optional[shared_updatevoicechannelresponse.UpdateVoiceChannelResponse] = dataclasses.field(default=None)
    
