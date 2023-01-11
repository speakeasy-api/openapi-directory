import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetDeviceRequest:
    r"""GetDeviceRequest
    Represents the request to get the device.
    """
    
    device_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceKey') }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    
