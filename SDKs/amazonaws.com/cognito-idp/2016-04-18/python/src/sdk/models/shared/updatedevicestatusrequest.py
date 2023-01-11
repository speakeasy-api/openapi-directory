import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicerememberedstatustype_enum as shared_devicerememberedstatustype_enum


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceStatusRequest:
    r"""UpdateDeviceStatusRequest
    Represents the request to update the device status.
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    device_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceKey') }})
    device_remembered_status: Optional[shared_devicerememberedstatustype_enum.DeviceRememberedStatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceRememberedStatus') }})
    
