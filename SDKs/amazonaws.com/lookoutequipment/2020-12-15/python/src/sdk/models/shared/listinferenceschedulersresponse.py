import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inferenceschedulersummary as shared_inferenceschedulersummary


@dataclass_json
@dataclasses.dataclass
class ListInferenceSchedulersResponse:
    inference_scheduler_summaries: Optional[list[shared_inferenceschedulersummary.InferenceSchedulerSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InferenceSchedulerSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
