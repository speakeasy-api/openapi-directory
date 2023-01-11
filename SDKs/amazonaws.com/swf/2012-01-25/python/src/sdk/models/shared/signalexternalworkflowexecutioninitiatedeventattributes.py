import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SignalExternalWorkflowExecutionInitiatedEventAttributes:
    r"""SignalExternalWorkflowExecutionInitiatedEventAttributes
    Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.
    """
    
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    signal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signalName') }})
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    control: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runId') }})
    
