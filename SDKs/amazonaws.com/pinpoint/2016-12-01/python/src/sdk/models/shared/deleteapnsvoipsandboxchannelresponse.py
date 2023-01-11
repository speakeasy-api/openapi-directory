import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apnsvoipsandboxchannelresponse as shared_apnsvoipsandboxchannelresponse


@dataclass_json
@dataclasses.dataclass
class DeleteApnsVoipSandboxChannelResponse:
    apns_voip_sandbox_channel_response: shared_apnsvoipsandboxchannelresponse.ApnsVoipSandboxChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSVoipSandboxChannelResponse') }})
    
