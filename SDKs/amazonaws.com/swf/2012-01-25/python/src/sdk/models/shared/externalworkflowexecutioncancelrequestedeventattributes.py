import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecution as shared_workflowexecution


@dataclass_json
@dataclasses.dataclass
class ExternalWorkflowExecutionCancelRequestedEventAttributes:
    r"""ExternalWorkflowExecutionCancelRequestedEventAttributes
    Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event.
    """
    
    initiated_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    workflow_execution: shared_workflowexecution.WorkflowExecution = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    
