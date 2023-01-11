import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecutiontimeouttype_enum as shared_workflowexecutiontimeouttype_enum
from ..shared import workflowexecution as shared_workflowexecution
from ..shared import workflowtype as shared_workflowtype


@dataclass_json
@dataclasses.dataclass
class ChildWorkflowExecutionTimedOutEventAttributes:
    r"""ChildWorkflowExecutionTimedOutEventAttributes
    Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.
    """
    
    initiated_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    started_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    timeout_type: shared_workflowexecutiontimeouttype_enum.WorkflowExecutionTimeoutTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutType') }})
    workflow_execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    workflow_type: shared_workflowtype.WorkflowType = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    
