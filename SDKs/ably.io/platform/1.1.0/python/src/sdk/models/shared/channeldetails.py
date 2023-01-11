import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelstatus as shared_channelstatus


@dataclass_json
@dataclasses.dataclass
class ChannelDetails:
    channel_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    is_global_master: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isGlobalMaster') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    status: Optional[shared_channelstatus.ChannelStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
