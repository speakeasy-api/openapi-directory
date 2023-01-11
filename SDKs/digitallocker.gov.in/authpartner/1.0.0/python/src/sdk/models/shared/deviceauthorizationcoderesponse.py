import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeviceAuthorizationCodeResponse:
    device_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_code') }})
    dl_masked_email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dl_masked_email') }})
    dl_masked_mobile: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dl_masked_mobile') }})
    expires_in: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    
