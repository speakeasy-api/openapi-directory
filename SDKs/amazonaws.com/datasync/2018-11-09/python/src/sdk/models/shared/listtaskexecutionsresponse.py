import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskexecutionlistentry as shared_taskexecutionlistentry


@dataclass_json
@dataclasses.dataclass
class ListTaskExecutionsResponse:
    r"""ListTaskExecutionsResponse
    ListTaskExecutionsResponse
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    task_executions: Optional[list[shared_taskexecutionlistentry.TaskExecutionListEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskExecutions') }})
    
