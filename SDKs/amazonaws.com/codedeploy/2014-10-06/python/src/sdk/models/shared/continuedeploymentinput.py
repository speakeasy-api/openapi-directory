import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentwaittype_enum as shared_deploymentwaittype_enum


@dataclass_json
@dataclasses.dataclass
class ContinueDeploymentInput:
    deployment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    deployment_wait_type: Optional[shared_deploymentwaittype_enum.DeploymentWaitTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentWaitType') }})
    
