import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchitemerror as shared_batchitemerror


@dataclass_json
@dataclasses.dataclass
class BatchDeleteDevicePositionHistoryError:
    r"""BatchDeleteDevicePositionHistoryError
    Contains the tracker resource details.
    """
    
    device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    error: shared_batchitemerror.BatchItemError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    
