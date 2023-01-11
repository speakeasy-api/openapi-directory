import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class GetJobResult:
    job: shared_job.Job = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    
