import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicetype as shared_devicetype


@dataclass_json
@dataclasses.dataclass
class AdminListDevicesResponse:
    r"""AdminListDevicesResponse
    Lists the device's response, as an administrator.
    """
    
    devices: Optional[list[shared_devicetype.DeviceType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Devices') }})
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaginationToken') }})
    
