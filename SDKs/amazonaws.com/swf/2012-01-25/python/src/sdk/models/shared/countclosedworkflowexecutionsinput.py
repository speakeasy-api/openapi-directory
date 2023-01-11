import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import closestatusfilter as shared_closestatusfilter
from ..shared import executiontimefilter as shared_executiontimefilter
from ..shared import workflowexecutionfilter as shared_workflowexecutionfilter
from ..shared import tagfilter as shared_tagfilter
from ..shared import workflowtypefilter as shared_workflowtypefilter


@dataclass_json
@dataclasses.dataclass
class CountClosedWorkflowExecutionsInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    close_status_filter: Optional[shared_closestatusfilter.CloseStatusFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeStatusFilter') }})
    close_time_filter: Optional[shared_executiontimefilter.ExecutionTimeFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closeTimeFilter') }})
    execution_filter: Optional[shared_workflowexecutionfilter.WorkflowExecutionFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionFilter') }})
    start_time_filter: Optional[shared_executiontimefilter.ExecutionTimeFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeFilter') }})
    tag_filter: Optional[shared_tagfilter.TagFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFilter') }})
    type_filter: Optional[shared_workflowtypefilter.WorkflowTypeFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeFilter') }})
    
