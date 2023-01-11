import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apnssandboxchannelresponse as shared_apnssandboxchannelresponse


@dataclass_json
@dataclasses.dataclass
class DeleteApnsSandboxChannelResponse:
    apns_sandbox_channel_response: shared_apnssandboxchannelresponse.ApnsSandboxChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSSandboxChannelResponse') }})
    
