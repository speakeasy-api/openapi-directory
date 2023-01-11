import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymenttarget as shared_deploymenttarget


@dataclass_json
@dataclasses.dataclass
class BatchGetDeploymentTargetsOutput:
    deployment_targets: Optional[list[shared_deploymenttarget.DeploymentTarget]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentTargets') }})
    
