import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicesecretverifierconfigtype as shared_devicesecretverifierconfigtype


@dataclass_json
@dataclasses.dataclass
class ConfirmDeviceRequest:
    r"""ConfirmDeviceRequest
    Confirms the device request.
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    device_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceKey') }})
    device_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    device_secret_verifier_config: Optional[shared_devicesecretverifierconfigtype.DeviceSecretVerifierConfigType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceSecretVerifierConfig') }})
    
