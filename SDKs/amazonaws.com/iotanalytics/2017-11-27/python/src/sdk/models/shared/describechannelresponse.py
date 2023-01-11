import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channel as shared_channel
from ..shared import channelstatistics as shared_channelstatistics


@dataclass_json
@dataclasses.dataclass
class DescribeChannelResponse:
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    statistics: Optional[shared_channelstatistics.ChannelStatistics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    
