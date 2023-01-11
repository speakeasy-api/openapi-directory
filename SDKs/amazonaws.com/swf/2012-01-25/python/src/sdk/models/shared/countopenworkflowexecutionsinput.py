import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecutionfilter as shared_workflowexecutionfilter
from ..shared import executiontimefilter as shared_executiontimefilter
from ..shared import tagfilter as shared_tagfilter
from ..shared import workflowtypefilter as shared_workflowtypefilter


@dataclass_json
@dataclasses.dataclass
class CountOpenWorkflowExecutionsInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    start_time_filter: shared_executiontimefilter.ExecutionTimeFilter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeFilter') }})
    execution_filter: Optional[shared_workflowexecutionfilter.WorkflowExecutionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionFilter') }})
    tag_filter: Optional[shared_tagfilter.TagFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilter') }})
    type_filter: Optional[shared_workflowtypefilter.WorkflowTypeFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeFilter') }})
    
