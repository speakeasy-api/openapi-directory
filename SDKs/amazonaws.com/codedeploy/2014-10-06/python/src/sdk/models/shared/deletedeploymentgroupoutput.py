import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalinggroup as shared_autoscalinggroup


@dataclass_json
@dataclasses.dataclass
class DeleteDeploymentGroupOutput:
    r"""DeleteDeploymentGroupOutput
    Represents the output of a <code>DeleteDeploymentGroup</code> operation.
    """
    
    hooks_not_cleaned_up: Optional[list[shared_autoscalinggroup.AutoScalingGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooksNotCleanedUp') }})
    
