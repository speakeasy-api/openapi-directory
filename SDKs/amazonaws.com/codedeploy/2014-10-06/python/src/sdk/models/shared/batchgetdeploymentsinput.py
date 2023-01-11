import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchGetDeploymentsInput:
    r"""BatchGetDeploymentsInput
     Represents the input of a <code>BatchGetDeployments</code> operation. 
    """
    
    deployment_ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentIds') }})
    
