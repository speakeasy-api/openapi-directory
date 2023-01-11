import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import associatedclientdevice as shared_associatedclientdevice


@dataclass_json
@dataclasses.dataclass
class ListClientDevicesAssociatedWithCoreDeviceResponse:
    associated_client_devices: Optional[list[shared_associatedclientdevice.AssociatedClientDevice]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedClientDevices') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
