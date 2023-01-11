import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchdeletegeofenceerror as shared_batchdeletegeofenceerror


@dataclass_json
@dataclasses.dataclass
class BatchDeleteGeofenceResponse:
    errors: list[shared_batchdeletegeofenceerror.BatchDeleteGeofenceError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
