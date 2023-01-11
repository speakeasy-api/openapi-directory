import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import voicechannelresponse as shared_voicechannelresponse


@dataclass_json
@dataclasses.dataclass
class GetVoiceChannelResponse:
    voice_channel_response: shared_voicechannelresponse.VoiceChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceChannelResponse') }})
    
