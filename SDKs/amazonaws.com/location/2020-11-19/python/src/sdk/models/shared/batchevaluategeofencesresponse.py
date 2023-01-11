import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchevaluategeofenceserror as shared_batchevaluategeofenceserror


@dataclass_json
@dataclasses.dataclass
class BatchEvaluateGeofencesResponse:
    errors: list[shared_batchevaluategeofenceserror.BatchEvaluateGeofencesError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Errors') }})
    
