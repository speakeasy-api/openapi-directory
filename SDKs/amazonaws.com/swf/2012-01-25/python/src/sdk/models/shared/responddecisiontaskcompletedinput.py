import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import decision as shared_decision


@dataclass_json
@dataclasses.dataclass
class RespondDecisionTaskCompletedInput:
    r"""RespondDecisionTaskCompletedInput
    Input data for a TaskCompleted response to a decision task.
    """
    
    task_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskToken') }})
    decisions: Optional[list[shared_decision.Decision]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisions') }})
    execution_context: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionContext') }})
    
