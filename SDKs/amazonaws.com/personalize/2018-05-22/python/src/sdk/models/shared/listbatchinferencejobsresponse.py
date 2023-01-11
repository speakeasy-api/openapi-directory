import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchinferencejobsummary as shared_batchinferencejobsummary


@dataclass_json
@dataclasses.dataclass
class ListBatchInferenceJobsResponse:
    batch_inference_jobs: Optional[list[shared_batchinferencejobsummary.BatchInferenceJobSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchInferenceJobs') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
