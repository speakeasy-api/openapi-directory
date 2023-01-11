import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecution as shared_workflowexecution
from ..shared import workflowtype as shared_workflowtype


@dataclass_json
@dataclasses.dataclass
class ChildWorkflowExecutionCompletedEventAttributes:
    r"""ChildWorkflowExecutionCompletedEventAttributes
    Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event.
    """
    
    initiated_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    workflow_execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    workflow_type: shared_workflowtype.WorkflowType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
