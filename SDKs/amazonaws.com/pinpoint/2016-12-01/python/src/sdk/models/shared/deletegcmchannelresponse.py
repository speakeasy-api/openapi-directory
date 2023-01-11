import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gcmchannelresponse as shared_gcmchannelresponse


@dataclass_json
@dataclasses.dataclass
class DeleteGcmChannelResponse:
    gcm_channel_response: shared_gcmchannelresponse.GcmChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCMChannelResponse') }})
    
