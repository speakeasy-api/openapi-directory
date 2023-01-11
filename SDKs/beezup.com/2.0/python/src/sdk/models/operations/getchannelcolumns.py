import dataclasses
from typing import Optional
from ..shared import channelcolumn as shared_channelcolumn


@dataclasses.dataclass
class GetChannelColumnsPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelColumnsHeaders:
    accept_encoding: list[str] = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelColumnsRequest:
    headers: GetChannelColumnsHeaders = dataclasses.field()
    path_params: GetChannelColumnsPathParams = dataclasses.field()
    request: Optional[list[str]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetChannelColumnsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    channel_columns: Optional[list[shared_channelcolumn.ChannelColumn]] = dataclasses.field(default=None)
    
