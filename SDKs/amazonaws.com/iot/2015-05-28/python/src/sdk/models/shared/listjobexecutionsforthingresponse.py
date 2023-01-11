import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobexecutionsummaryforthing as shared_jobexecutionsummaryforthing


@dataclass_json
@dataclasses.dataclass
class ListJobExecutionsForThingResponse:
    execution_summaries: Optional[list[shared_jobexecutionsummaryforthing.JobExecutionSummaryForThing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
