import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentgroupinfo as shared_deploymentgroupinfo


@dataclass_json
@dataclasses.dataclass
class GetDeploymentGroupOutput:
    r"""GetDeploymentGroupOutput
    Represents the output of a <code>GetDeploymentGroup</code> operation.
    """
    
    deployment_group_info: Optional[shared_deploymentgroupinfo.DeploymentGroupInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupInfo') }})
    
