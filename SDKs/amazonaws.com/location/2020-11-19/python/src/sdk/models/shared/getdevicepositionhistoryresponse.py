import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceposition as shared_deviceposition


@dataclass_json
@dataclasses.dataclass
class GetDevicePositionHistoryResponse:
    device_positions: list[shared_deviceposition.DevicePosition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DevicePositions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
