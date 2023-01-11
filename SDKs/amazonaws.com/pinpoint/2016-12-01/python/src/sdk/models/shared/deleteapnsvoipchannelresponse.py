import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apnsvoipchannelresponse as shared_apnsvoipchannelresponse


@dataclass_json
@dataclasses.dataclass
class DeleteApnsVoipChannelResponse:
    apns_voip_channel_response: shared_apnsvoipchannelresponse.ApnsVoipChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSVoipChannelResponse') }})
    
