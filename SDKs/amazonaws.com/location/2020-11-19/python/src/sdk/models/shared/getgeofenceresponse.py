import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geofencegeometry as shared_geofencegeometry


@dataclass_json
@dataclasses.dataclass
class GetGeofenceResponse:
    create_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeofenceId') }})
    geometry: shared_geofencegeometry.GeofenceGeometry = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
