import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importjobsresponse as shared_importjobsresponse


@dataclass_json
@dataclasses.dataclass
class GetImportJobsResponse:
    import_jobs_response: shared_importjobsresponse.ImportJobsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportJobsResponse') }})
    
