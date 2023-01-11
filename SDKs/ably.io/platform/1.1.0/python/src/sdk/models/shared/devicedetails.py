import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recipient as shared_recipient
from ..shared import recipient as shared_recipient

class DeviceDetailsFormFactorEnum(str, Enum):
    PHONE = "phone"
    TABLET = "tablet"
    DESKTOP = "desktop"
    TV = "tv"
    WATCH = "watch"
    CAR = "car"
    EMBEDDED = "embedded"

class DeviceDetailsPlatformEnum(str, Enum):
    IOS = "ios"
    ANDROID = "android"

class DeviceDetailsPushStateEnum(str, Enum):
    ACTIVE = "Active"
    FAILING = "Failing"
    FAILED = "Failed"


@dataclass_json
@dataclasses.dataclass
class DeviceDetailsOutput:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    device_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSecret') }})
    form_factor: Optional[DeviceDetailsFormFactorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    platform: Optional[DeviceDetailsPlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    push_recipient: Optional[shared_recipient.RecipientOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push.recipient') }})
    push_state: Optional[DeviceDetailsPushStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push.state') }})
    

@dataclass_json
@dataclasses.dataclass
class DeviceDetailsInput:
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }, 'form': { 'field_name': 'clientId' }})
    device_secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSecret') }, 'form': { 'field_name': 'deviceSecret' }})
    form_factor: Optional[DeviceDetailsFormFactorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }, 'form': { 'field_name': 'formFactor' }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }, 'form': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }, 'form': { 'field_name': 'metadata' }})
    platform: Optional[DeviceDetailsPlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }, 'form': { 'field_name': 'platform' }})
    push_recipient: Optional[shared_recipient.Recipient] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push.recipient') }, 'form': { 'field_name': 'push.recipient' }})
    
