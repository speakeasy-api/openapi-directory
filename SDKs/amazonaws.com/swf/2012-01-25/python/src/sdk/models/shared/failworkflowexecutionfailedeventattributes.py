import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failworkflowexecutionfailedcause_enum as shared_failworkflowexecutionfailedcause_enum


@dataclass_json
@dataclasses.dataclass
class FailWorkflowExecutionFailedEventAttributes:
    r"""FailWorkflowExecutionFailedEventAttributes
    Provides the details of the <code>FailWorkflowExecutionFailed</code> event.
    """
    
    cause: shared_failworkflowexecutionfailedcause_enum.FailWorkflowExecutionFailedCauseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    decision_task_completed_event_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    
