import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchupdatedevicepositionerror as shared_batchupdatedevicepositionerror


@dataclass_json
@dataclasses.dataclass
class BatchUpdateDevicePositionResponse:
    errors: list[shared_batchupdatedevicepositionerror.BatchUpdateDevicePositionError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
