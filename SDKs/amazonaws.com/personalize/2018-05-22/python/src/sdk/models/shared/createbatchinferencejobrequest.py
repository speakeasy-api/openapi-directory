import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchinferencejobconfig as shared_batchinferencejobconfig
from ..shared import batchinferencejobinput as shared_batchinferencejobinput
from ..shared import batchinferencejoboutput as shared_batchinferencejoboutput


@dataclass_json
@dataclasses.dataclass
class CreateBatchInferenceJobRequest:
    job_input: shared_batchinferencejobinput.BatchInferenceJobInput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInput') }})
    job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_output: shared_batchinferencejoboutput.BatchInferenceJobOutput = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobOutput') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    solution_version_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionVersionArn') }})
    batch_inference_job_config: Optional[shared_batchinferencejobconfig.BatchInferenceJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchInferenceJobConfig') }})
    filter_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterArn') }})
    num_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numResults') }})
    
