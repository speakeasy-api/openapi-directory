import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RecipientTransportTypeEnum(str, Enum):
    APNS = "apns"
    FCM = "fcm"
    GCM = "gcm"


@dataclass_json
@dataclasses.dataclass
class RecipientOutput:
    r"""RecipientOutput
    Push recipient details for a device.
    """
    
    device_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceToken') }})
    registration_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationToken') }})
    transport_type: Optional[RecipientTransportTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportType') }})
    

@dataclass_json
@dataclasses.dataclass
class Recipient:
    r"""Recipient
    Push recipient details for a device.
    """
    
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }, 'form': { 'field_name': 'clientId' }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }, 'form': { 'field_name': 'deviceId' }})
    device_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceToken') }, 'form': { 'field_name': 'deviceToken' }})
    registration_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrationToken') }, 'form': { 'field_name': 'registrationToken' }})
    transport_type: Optional[RecipientTransportTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transportType') }, 'form': { 'field_name': 'transportType' }})
    
