import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchPutGeofenceSuccess:
    r"""BatchPutGeofenceSuccess
    Contains a summary of each geofence that was successfully stored in a given geofence collection.
    """
    
    create_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeofenceId') }})
    update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
