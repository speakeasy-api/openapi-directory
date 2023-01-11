import dataclasses
from typing import Optional
from ..shared import channel as shared_channel


@dataclasses.dataclass
class GetV3AssetChangesChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    channels: Optional[list[shared_channel.Channel]] = dataclasses.field(default=None)
    
