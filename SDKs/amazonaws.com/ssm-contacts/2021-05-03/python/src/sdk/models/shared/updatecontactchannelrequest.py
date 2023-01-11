import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactchanneladdress as shared_contactchanneladdress


@dataclass_json
@dataclasses.dataclass
class UpdateContactChannelRequest:
    contact_channel_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelId') }})
    delivery_address: Optional[shared_contactchanneladdress.ContactChannelAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryAddress') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
