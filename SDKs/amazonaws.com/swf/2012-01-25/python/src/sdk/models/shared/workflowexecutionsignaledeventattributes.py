import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workflowexecution as shared_workflowexecution


@dataclass_json
@dataclasses.dataclass
class WorkflowExecutionSignaledEventAttributes:
    r"""WorkflowExecutionSignaledEventAttributes
    Provides the details of the <code>WorkflowExecutionSignaled</code> event.
    """
    
    signal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signalName') }})
    external_initiated_event_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalInitiatedEventId') }})
    external_workflow_execution: Optional[shared_workflowexecution.WorkflowExecution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalWorkflowExecution') }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    
