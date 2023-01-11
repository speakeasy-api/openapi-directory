import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetDeploymentInput:
    r"""GetDeploymentInput
    Represents the input of a <code>GetDeployment</code> operation.
    """
    
    deployment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    
