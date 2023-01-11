import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executionstepresult as shared_executionstepresult


@dataclass_json
@dataclasses.dataclass
class ExecutionResults:
    r"""ExecutionResults
    Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.
    """
    
    on_exception_steps: Optional[list[shared_executionstepresult.ExecutionStepResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnExceptionSteps') }})
    steps: Optional[list[shared_executionstepresult.ExecutionStepResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    
