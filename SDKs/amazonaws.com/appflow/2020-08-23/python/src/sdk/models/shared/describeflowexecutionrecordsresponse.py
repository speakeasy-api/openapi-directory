import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executionrecord as shared_executionrecord


@dataclass_json
@dataclasses.dataclass
class DescribeFlowExecutionRecordsResponse:
    flow_executions: Optional[list[shared_executionrecord.ExecutionRecord]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowExecutions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
