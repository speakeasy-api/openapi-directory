import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inferenceexecutionsummary as shared_inferenceexecutionsummary


@dataclass_json
@dataclasses.dataclass
class ListInferenceExecutionsResponse:
    inference_execution_summaries: Optional[list[shared_inferenceexecutionsummary.InferenceExecutionSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceExecutionSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
