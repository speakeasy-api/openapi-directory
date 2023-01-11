import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import emailchannelresponse as shared_emailchannelresponse


@dataclass_json
@dataclasses.dataclass
class UpdateEmailChannelResponse:
    email_channel_response: shared_emailchannelresponse.EmailChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailChannelResponse') }})
    
