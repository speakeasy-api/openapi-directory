import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deviceposition as shared_deviceposition
from ..shared import batchgetdevicepositionerror as shared_batchgetdevicepositionerror


@dataclass_json
@dataclasses.dataclass
class BatchGetDevicePositionResponse:
    device_positions: list[shared_deviceposition.DevicePosition] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DevicePositions') }})
    errors: list[shared_batchgetdevicepositionerror.BatchGetDevicePositionError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
