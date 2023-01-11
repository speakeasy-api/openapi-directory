import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchinferencejob as shared_batchinferencejob


@dataclass_json
@dataclasses.dataclass
class DescribeBatchInferenceJobResponse:
    batch_inference_job: Optional[shared_batchinferencejob.BatchInferenceJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchInferenceJob') }})
    
