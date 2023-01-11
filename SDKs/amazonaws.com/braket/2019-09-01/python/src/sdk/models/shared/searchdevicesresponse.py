import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import devicesummary as shared_devicesummary


@dataclass_json
@dataclasses.dataclass
class SearchDevicesResponse:
    devices: list[shared_devicesummary.DeviceSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
