import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowrun as shared_workflowrun


@dataclass_json
@dataclasses.dataclass
class GetWorkflowRunsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    runs: Optional[list[shared_workflowrun.WorkflowRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Runs') }})
    
