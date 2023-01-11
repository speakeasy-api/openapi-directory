import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobexecutionsummaryforjob as shared_jobexecutionsummaryforjob


@dataclass_json
@dataclasses.dataclass
class ListJobExecutionsForJobResponse:
    execution_summaries: Optional[list[shared_jobexecutionsummaryforjob.JobExecutionSummaryForJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
