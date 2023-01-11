import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactchanneladdress as shared_contactchanneladdress
from ..shared import channeltype_enum as shared_channeltype_enum


@dataclass_json
@dataclasses.dataclass
class CreateContactChannelRequest:
    contact_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    delivery_address: shared_contactchanneladdress.ContactChannelAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryAddress') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: shared_channeltype_enum.ChannelTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    defer_activation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeferActivation') }})
    idempotency_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    
