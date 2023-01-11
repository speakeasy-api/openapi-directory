import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BeezUpCommonChannelBasicInfo:
    r"""BeezUpCommonChannelBasicInfo
    The basic info related to a channel
    """
    
    channel_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_image_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelImageUrl') }})
    channel_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelName') }})
    
