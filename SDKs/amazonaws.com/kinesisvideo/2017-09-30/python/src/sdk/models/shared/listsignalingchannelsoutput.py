import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelinfo as shared_channelinfo


@dataclass_json
@dataclasses.dataclass
class ListSignalingChannelsOutput:
    channel_info_list: Optional[list[shared_channelinfo.ChannelInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelInfoList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
