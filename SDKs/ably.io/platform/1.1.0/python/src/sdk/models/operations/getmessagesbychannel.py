import dataclasses
from typing import Optional
from enum import Enum
from ..shared import filterdirection_enum as shared_filterdirection_enum
from ..shared import responseformat_enum as shared_responseformat_enum
from ..shared import message as shared_message


@dataclasses.dataclass
class GetMessagesByChannelPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessagesByChannelQueryParams:
    direction: Optional[shared_filterdirection_enum.FilterDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    format: Optional[shared_responseformat_enum.ResponseFormatEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMessagesByChannelHeaders:
    x_ably_version: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Ably-Version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessagesByChannelRequest:
    headers: GetMessagesByChannelHeaders = dataclasses.field()
    path_params: GetMessagesByChannelPathParams = dataclasses.field()
    query_params: GetMessagesByChannelQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMessagesByChannelResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    messages: Optional[list[shared_message.Message]] = dataclasses.field(default=None)
    get_messages_by_channel_2_xx_text_html_string: Optional[str] = dataclasses.field(default=None)
    
