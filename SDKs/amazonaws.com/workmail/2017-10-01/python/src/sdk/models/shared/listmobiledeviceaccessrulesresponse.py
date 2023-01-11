import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobiledeviceaccessrule as shared_mobiledeviceaccessrule


@dataclass_json
@dataclasses.dataclass
class ListMobileDeviceAccessRulesResponse:
    rules: Optional[list[shared_mobiledeviceaccessrule.MobileDeviceAccessRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
