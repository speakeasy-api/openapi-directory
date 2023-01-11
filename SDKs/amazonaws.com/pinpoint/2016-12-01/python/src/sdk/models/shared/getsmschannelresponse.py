import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import smschannelresponse as shared_smschannelresponse


@dataclass_json
@dataclasses.dataclass
class GetSmsChannelResponse:
    sms_channel_response: shared_smschannelresponse.SmsChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSChannelResponse') }})
    
