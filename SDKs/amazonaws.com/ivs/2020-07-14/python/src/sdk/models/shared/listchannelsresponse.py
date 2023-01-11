import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelsummary as shared_channelsummary


@dataclass_json
@dataclasses.dataclass
class ListChannelsResponse:
    channels: list[shared_channelsummary.ChannelSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
