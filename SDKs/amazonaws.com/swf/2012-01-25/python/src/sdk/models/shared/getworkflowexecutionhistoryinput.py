import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecution as shared_workflowexecution


@dataclass_json
@dataclasses.dataclass
class GetWorkflowExecutionHistoryInput:
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execution') }})
    maximum_page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPageSize') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reverse_order: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverseOrder') }})
    
