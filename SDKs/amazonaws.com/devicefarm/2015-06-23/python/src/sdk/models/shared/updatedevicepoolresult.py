import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicepool as shared_devicepool


@dataclass_json
@dataclasses.dataclass
class UpdateDevicePoolResult:
    r"""UpdateDevicePoolResult
    Represents the result of an update device pool request.
    """
    
    device_pool: Optional[shared_devicepool.DevicePool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePool') }})
    
