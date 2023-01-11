import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import admchannelresponse as shared_admchannelresponse


@dataclass_json
@dataclasses.dataclass
class DeleteAdmChannelResponse:
    adm_channel_response: shared_admchannelresponse.AdmChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADMChannelResponse') }})
    
