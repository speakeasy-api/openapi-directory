import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import signalexternalworkflowexecutionfailedcause_enum as shared_signalexternalworkflowexecutionfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class SignalExternalWorkflowExecutionFailedEventAttributes:
    r"""SignalExternalWorkflowExecutionFailedEventAttributes
    Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event.
    """
    
    cause: shared_signalexternalworkflowexecutionfailedcause_enum.SignalExternalWorkflowExecutionFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    initiated_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiatedEventId') }})
    workflow_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowId') }})
    control: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runId') }})
    
