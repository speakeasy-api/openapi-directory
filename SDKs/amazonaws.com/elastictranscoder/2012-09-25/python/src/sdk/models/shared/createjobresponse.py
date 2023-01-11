import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import job as shared_job


@dataclass_json
@dataclasses.dataclass
class CreateJobResponse:
    r"""CreateJobResponse
    The CreateJobResponse structure.
    """
    
    job: Optional[shared_job.Job] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Job') }})
    
