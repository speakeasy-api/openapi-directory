import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportjobresponse as shared_exportjobresponse


@dataclass_json
@dataclasses.dataclass
class CreateExportJobResponse:
    export_job_response: shared_exportjobresponse.ExportJobResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportJobResponse') }})
    
