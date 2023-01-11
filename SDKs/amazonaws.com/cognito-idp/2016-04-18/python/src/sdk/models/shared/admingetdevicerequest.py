import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdminGetDeviceRequest:
    r"""AdminGetDeviceRequest
    Represents the request to get the device, as an administrator.
    """
    
    device_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceKey') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
