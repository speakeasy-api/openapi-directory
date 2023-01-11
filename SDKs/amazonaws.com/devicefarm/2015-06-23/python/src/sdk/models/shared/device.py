import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceavailability_enum as shared_deviceavailability_enum
from ..shared import cpu as shared_cpu
from ..shared import deviceformfactor_enum as shared_deviceformfactor_enum
from ..shared import deviceinstance as shared_deviceinstance
from ..shared import deviceplatform_enum as shared_deviceplatform_enum
from ..shared import resolution as shared_resolution


@dataclass_json
@dataclasses.dataclass
class Device:
    r"""Device
    Represents a device type that an app is tested against.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    availability: Optional[shared_deviceavailability_enum.DeviceAvailabilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    carrier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    cpu: Optional[shared_cpu.CPU] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpu') }})
    fleet_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetName') }})
    fleet_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetType') }})
    form_factor: Optional[shared_deviceformfactor_enum.DeviceFormFactorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    heap_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heapSize') }})
    image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instances: Optional[list[shared_deviceinstance.DeviceInstance]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    memory: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    model_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    platform: Optional[shared_deviceplatform_enum.DevicePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    radio: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radio') }})
    remote_access_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteAccessEnabled') }})
    remote_debug_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteDebugEnabled') }})
    resolution: Optional[shared_resolution.Resolution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
