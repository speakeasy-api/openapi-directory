import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directmessageconfiguration as shared_directmessageconfiguration
from ..shared import templateconfiguration as shared_templateconfiguration
from ..shared import endpointsendconfiguration as shared_endpointsendconfiguration
from ..shared import sendusersmessagesresponse as shared_sendusersmessagesresponse


@dataclasses.dataclass
class SendUsersMessagesPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendUsersMessagesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SendUsersMessagesRequestBodySendUsersMessageRequest:
    r"""SendUsersMessagesRequestBodySendUsersMessageRequest
    Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
    """
    
    context: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Context') }})
    message_configuration: Optional[shared_directmessageconfiguration.DirectMessageConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageConfiguration') }})
    template_configuration: Optional[shared_templateconfiguration.TemplateConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateConfiguration') }})
    trace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TraceId') }})
    users: Optional[dict[str, shared_endpointsendconfiguration.EndpointSendConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Users') }})
    

@dataclass_json
@dataclasses.dataclass
class SendUsersMessagesRequestBody:
    send_users_message_request: SendUsersMessagesRequestBodySendUsersMessageRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SendUsersMessageRequest') }})
    

@dataclasses.dataclass
class SendUsersMessagesRequest:
    headers: SendUsersMessagesHeaders = dataclasses.field()
    path_params: SendUsersMessagesPathParams = dataclasses.field()
    request: SendUsersMessagesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendUsersMessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    send_users_messages_response: Optional[shared_sendusersmessagesresponse.SendUsersMessagesResponse] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
