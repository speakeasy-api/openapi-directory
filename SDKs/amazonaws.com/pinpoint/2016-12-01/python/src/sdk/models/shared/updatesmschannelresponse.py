import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import smschannelresponse as shared_smschannelresponse


@dataclass_json
@dataclasses.dataclass
class UpdateSmsChannelResponse:
    sms_channel_response: shared_smschannelresponse.SmsChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSChannelResponse') }})
    
