import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelheaderlinks as shared_channelheaderlinks


@dataclass_json
@dataclasses.dataclass
class ChannelHeader:
    r"""ChannelHeader
    The available channel
    """
    
    channel_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_logo_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelLogoUrl') }})
    channel_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelName') }})
    links: shared_channelheaderlinks.ChannelHeaderLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    types: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
