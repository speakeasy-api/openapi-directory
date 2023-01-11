import dataclasses
from typing import Optional
from ..shared import channelheader as shared_channelheader


@dataclasses.dataclass
class GetAvailableChannelsQueryParams:
    store_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'storeId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAvailableChannelsRequest:
    query_params: GetAvailableChannelsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAvailableChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channel_headers: Optional[list[shared_channelheader.ChannelHeader]] = dataclasses.field(default=None)
    
