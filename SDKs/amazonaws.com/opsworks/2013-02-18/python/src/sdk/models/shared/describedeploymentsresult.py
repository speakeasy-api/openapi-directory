import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deployment as shared_deployment


@dataclass_json
@dataclasses.dataclass
class DescribeDeploymentsResult:
    r"""DescribeDeploymentsResult
    Contains the response to a <code>DescribeDeployments</code> request.
    """
    
    deployments: Optional[list[shared_deployment.Deployment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deployments') }})
    
