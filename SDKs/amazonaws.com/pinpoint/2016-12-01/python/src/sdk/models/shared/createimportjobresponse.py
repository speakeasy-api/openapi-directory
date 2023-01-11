import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importjobresponse as shared_importjobresponse


@dataclass_json
@dataclasses.dataclass
class CreateImportJobResponse:
    import_job_response: shared_importjobresponse.ImportJobResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportJobResponse') }})
    
