import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geofencegeometry as shared_geofencegeometry


@dataclass_json
@dataclasses.dataclass
class BatchPutGeofenceRequestEntry:
    r"""BatchPutGeofenceRequestEntry
    Contains geofence geometry details. 
    """
    
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeofenceId') }})
    geometry: shared_geofencegeometry.GeofenceGeometry = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    
