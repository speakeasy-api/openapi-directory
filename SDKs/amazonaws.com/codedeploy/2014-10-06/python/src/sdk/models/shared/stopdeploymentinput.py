import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StopDeploymentInput:
    r"""StopDeploymentInput
     Represents the input of a <code>StopDeployment</code> operation. 
    """
    
    deployment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    auto_rollback_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRollbackEnabled') }})
    
