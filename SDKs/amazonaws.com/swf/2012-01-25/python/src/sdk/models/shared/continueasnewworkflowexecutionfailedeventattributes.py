import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import continueasnewworkflowexecutionfailedcause_enum as shared_continueasnewworkflowexecutionfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class ContinueAsNewWorkflowExecutionFailedEventAttributes:
    r"""ContinueAsNewWorkflowExecutionFailedEventAttributes
    Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.
    """
    
    cause: shared_continueasnewworkflowexecutionfailedcause_enum.ContinueAsNewWorkflowExecutionFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
