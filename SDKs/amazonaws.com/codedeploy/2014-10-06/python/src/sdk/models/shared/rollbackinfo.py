import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RollbackInfo:
    r"""RollbackInfo
    Information about a deployment rollback.
    """
    
    rollback_deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollbackDeploymentId') }})
    rollback_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollbackMessage') }})
    rollback_triggering_deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollbackTriggeringDeploymentId') }})
    
