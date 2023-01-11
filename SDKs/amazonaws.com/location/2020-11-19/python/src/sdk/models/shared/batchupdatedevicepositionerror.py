import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchitemerror as shared_batchitemerror


@dataclass_json
@dataclasses.dataclass
class BatchUpdateDevicePositionError:
    r"""BatchUpdateDevicePositionError
    Contains error details for each device that failed to update its position.
    """
    
    device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    error: shared_batchitemerror.BatchItemError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    sample_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
