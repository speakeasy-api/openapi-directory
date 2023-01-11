import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentgroupinfo as shared_deploymentgroupinfo


@dataclass_json
@dataclasses.dataclass
class BatchGetDeploymentGroupsOutput:
    r"""BatchGetDeploymentGroupsOutput
    Represents the output of a <code>BatchGetDeploymentGroups</code> operation.
    """
    
    deployment_groups_info: Optional[list[shared_deploymentgroupinfo.DeploymentGroupInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupsInfo') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    
