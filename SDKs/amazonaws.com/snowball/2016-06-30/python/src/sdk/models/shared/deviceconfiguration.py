import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snowconedeviceconfiguration as shared_snowconedeviceconfiguration


@dataclass_json
@dataclasses.dataclass
class DeviceConfiguration:
    r"""DeviceConfiguration
    The container for <code>SnowconeDeviceConfiguration</code>. 
    """
    
    snowcone_device_configuration: Optional[shared_snowconedeviceconfiguration.SnowconeDeviceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowconeDeviceConfiguration') }})
    
