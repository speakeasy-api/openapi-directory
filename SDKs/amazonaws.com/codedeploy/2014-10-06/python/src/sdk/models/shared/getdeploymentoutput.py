import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentinfo as shared_deploymentinfo


@dataclass_json
@dataclasses.dataclass
class GetDeploymentOutput:
    r"""GetDeploymentOutput
    Represents the output of a <code>GetDeployment</code> operation.
    """
    
    deployment_info: Optional[shared_deploymentinfo.DeploymentInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentInfo') }})
    
