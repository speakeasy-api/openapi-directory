import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetMobileDeviceAccessEffectRequest:
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    device_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceModel') }})
    device_operating_system: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceOperatingSystem') }})
    device_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceType') }})
    device_user_agent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceUserAgent') }})
    
