import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchputgeofenceerror as shared_batchputgeofenceerror
from ..shared import batchputgeofencesuccess as shared_batchputgeofencesuccess


@dataclass_json
@dataclasses.dataclass
class BatchPutGeofenceResponse:
    errors: list[shared_batchputgeofenceerror.BatchPutGeofenceError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    successes: list[shared_batchputgeofencesuccess.BatchPutGeofenceSuccess] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successes') }})
    
