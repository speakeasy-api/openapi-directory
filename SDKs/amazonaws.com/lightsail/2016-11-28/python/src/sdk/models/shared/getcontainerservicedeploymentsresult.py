import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicedeployment as shared_containerservicedeployment


@dataclass_json
@dataclasses.dataclass
class GetContainerServiceDeploymentsResult:
    deployments: Optional[list[shared_containerservicedeployment.ContainerServiceDeployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    
