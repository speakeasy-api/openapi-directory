import dataclasses
from typing import Optional
from ..shared import channelinfo as shared_channelinfo


@dataclasses.dataclass
class GetChannelInfoPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelInfoRequest:
    path_params: GetChannelInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel_info: Optional[shared_channelinfo.ChannelInfo] = dataclasses.field(default=None)
    
