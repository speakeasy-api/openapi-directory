import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportjobsresponse as shared_exportjobsresponse


@dataclass_json
@dataclasses.dataclass
class GetExportJobsResponse:
    export_jobs_response: shared_exportjobsresponse.ExportJobsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportJobsResponse') }})
    
