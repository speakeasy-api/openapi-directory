import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentinfo as shared_deploymentinfo


@dataclass_json
@dataclasses.dataclass
class BatchGetDeploymentsOutput:
    r"""BatchGetDeploymentsOutput
     Represents the output of a <code>BatchGetDeployments</code> operation. 
    """
    
    deployments_info: Optional[list[shared_deploymentinfo.DeploymentInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentsInfo') }})
    
