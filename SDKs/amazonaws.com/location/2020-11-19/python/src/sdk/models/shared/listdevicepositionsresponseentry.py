import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListDevicePositionsResponseEntry:
    r"""ListDevicePositionsResponseEntry
    Contains the tracker resource details.
    """
    
    device_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    position: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Position') }})
    sample_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
