import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apnschannelresponse as shared_apnschannelresponse


@dataclass_json
@dataclasses.dataclass
class GetApnsChannelResponse:
    apns_channel_response: shared_apnschannelresponse.ApnsChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSChannelResponse') }})
    
