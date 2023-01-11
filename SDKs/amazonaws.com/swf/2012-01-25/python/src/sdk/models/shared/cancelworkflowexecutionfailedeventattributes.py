import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cancelworkflowexecutionfailedcause_enum as shared_cancelworkflowexecutionfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class CancelWorkflowExecutionFailedEventAttributes:
    r"""CancelWorkflowExecutionFailedEventAttributes
    Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
    """
    
    cause: shared_cancelworkflowexecutionfailedcause_enum.CancelWorkflowExecutionFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
