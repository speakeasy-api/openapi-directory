import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchdeletedevicepositionhistoryerror as shared_batchdeletedevicepositionhistoryerror


@dataclass_json
@dataclasses.dataclass
class BatchDeleteDevicePositionHistoryResponse:
    errors: list[shared_batchdeletedevicepositionhistoryerror.BatchDeleteDevicePositionHistoryError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
