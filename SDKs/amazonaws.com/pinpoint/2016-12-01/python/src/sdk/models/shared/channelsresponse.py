import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelresponse as shared_channelresponse


@dataclass_json
@dataclasses.dataclass
class ChannelsResponse:
    r"""ChannelsResponse
    Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
    """
    
    channels: dict[str, shared_channelresponse.ChannelResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Channels') }})
    
