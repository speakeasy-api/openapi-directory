import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WirelessConnection:
    r"""WirelessConnection
    Configures the wireless connection on an AWS Snowcone device.
    """
    
    is_wifi_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsWifiEnabled') }})
    
