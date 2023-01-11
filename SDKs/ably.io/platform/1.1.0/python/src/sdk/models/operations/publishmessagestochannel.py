import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import message as shared_message
from ..shared import error as shared_error


@dataclasses.dataclass
class PublishMessagesToChannelPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishMessagesToChannelQueryParams:
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PublishMessagesToChannelHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PublishMessagesToChannelRequestsInput:
    application_x_msgpack: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/x-msgpack' }})
    message: Optional[shared_message.MessageInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    message1: Optional[shared_message.MessageInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass_json
@dataclasses.dataclass
class PublishMessagesToChannel2XxApplicationJSON:
    channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    

@dataclasses.dataclass
class PublishMessagesToChannelRequest:
    headers: PublishMessagesToChannelHeaders = dataclasses.field()
    path_params: PublishMessagesToChannelPathParams = dataclasses.field()
    query_params: PublishMessagesToChannelQueryParams = dataclasses.field()
    request: Optional[PublishMessagesToChannelRequestsInput] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PublishMessagesToChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    publish_messages_to_channel_2_xx_application_json_object: Optional[PublishMessagesToChannel2XxApplicationJSON] = dataclasses.field(default=None)
    
