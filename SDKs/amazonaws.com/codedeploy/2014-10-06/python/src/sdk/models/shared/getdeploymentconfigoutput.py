import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentconfiginfo as shared_deploymentconfiginfo


@dataclass_json
@dataclasses.dataclass
class GetDeploymentConfigOutput:
    r"""GetDeploymentConfigOutput
    Represents the output of a <code>GetDeploymentConfig</code> operation.
    """
    
    deployment_config_info: Optional[shared_deploymentconfiginfo.DeploymentConfigInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigInfo') }})
    
