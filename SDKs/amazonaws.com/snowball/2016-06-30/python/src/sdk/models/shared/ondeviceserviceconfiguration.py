import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nfsondeviceserviceconfiguration as shared_nfsondeviceserviceconfiguration


@dataclass_json
@dataclasses.dataclass
class OnDeviceServiceConfiguration:
    r"""OnDeviceServiceConfiguration
    An object that represents metadata and configuration settings for services on an AWS Snow Family device.
    """
    
    nfs_on_device_service: Optional[shared_nfsondeviceserviceconfiguration.NfsOnDeviceServiceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NFSOnDeviceService') }})
    
