import dataclasses
from typing import Optional
from ..shared import channelrootcategory as shared_channelrootcategory


@dataclasses.dataclass
class GetChannelCategoriesPathParams:
    channel_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCategoriesHeaders:
    accept_encoding: list[str] = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Encoding', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChannelCategoriesRequest:
    headers: GetChannelCategoriesHeaders = dataclasses.field()
    path_params: GetChannelCategoriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChannelCategoriesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    channel_root_category: Optional[shared_channelrootcategory.ChannelRootCategory] = dataclasses.field(default=None)
    
