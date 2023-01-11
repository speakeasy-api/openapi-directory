import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import completeworkflowexecutionfailedcause_enum as shared_completeworkflowexecutionfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class CompleteWorkflowExecutionFailedEventAttributes:
    r"""CompleteWorkflowExecutionFailedEventAttributes
    Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.
    """
    
    cause: shared_completeworkflowexecutionfailedcause_enum.CompleteWorkflowExecutionFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
