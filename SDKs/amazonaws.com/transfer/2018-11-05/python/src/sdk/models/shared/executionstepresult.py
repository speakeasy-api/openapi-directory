import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import executionerror as shared_executionerror
from ..shared import workflowsteptype_enum as shared_workflowsteptype_enum


@dataclass_json
@dataclasses.dataclass
class ExecutionStepResult:
    r"""ExecutionStepResult
    Specifies the following details for the step: error (if any), outputs (if any), and the step type.
    """
    
    error: Optional[shared_executionerror.ExecutionError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    outputs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    step_type: Optional[shared_workflowsteptype_enum.WorkflowStepTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepType') }})
    
