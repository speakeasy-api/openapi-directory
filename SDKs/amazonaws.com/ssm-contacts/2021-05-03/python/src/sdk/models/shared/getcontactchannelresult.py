import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activationstatus_enum as shared_activationstatus_enum
from ..shared import contactchanneladdress as shared_contactchanneladdress
from ..shared import channeltype_enum as shared_channeltype_enum


@dataclass_json
@dataclasses.dataclass
class GetContactChannelResult:
    contact_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactArn') }})
    contact_channel_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactChannelArn') }})
    delivery_address: shared_contactchanneladdress.ContactChannelAddress = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryAddress') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: shared_channeltype_enum.ChannelTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    activation_status: Optional[shared_activationstatus_enum.ActivationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivationStatus') }})
    
