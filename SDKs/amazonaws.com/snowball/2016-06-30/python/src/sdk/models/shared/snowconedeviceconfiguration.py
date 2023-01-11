import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wirelessconnection as shared_wirelessconnection


@dataclass_json
@dataclasses.dataclass
class SnowconeDeviceConfiguration:
    r"""SnowconeDeviceConfiguration
    Specifies the device configuration for an AWS Snowcone job. 
    """
    
    wireless_connection: Optional[shared_wirelessconnection.WirelessConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WirelessConnection') }})
    
