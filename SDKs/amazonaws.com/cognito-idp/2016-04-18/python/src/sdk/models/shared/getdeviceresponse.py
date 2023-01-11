import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicetype as shared_devicetype


@dataclass_json
@dataclasses.dataclass
class GetDeviceResponse:
    r"""GetDeviceResponse
    Gets the device response.
    """
    
    device: shared_devicetype.DeviceType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Device') }})
    
