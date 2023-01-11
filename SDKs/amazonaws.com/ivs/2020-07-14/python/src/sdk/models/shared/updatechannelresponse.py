import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channel as shared_channel


@dataclass_json
@dataclasses.dataclass
class UpdateChannelResponse:
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    
