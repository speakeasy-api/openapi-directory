import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchitemerror as shared_batchitemerror


@dataclass_json
@dataclasses.dataclass
class BatchDeleteGeofenceError:
    r"""BatchDeleteGeofenceError
    Contains error details for each geofence that failed to delete from the geofence collection.
    """
    
    error: shared_batchitemerror.BatchItemError = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    geofence_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeofenceId') }})
    
