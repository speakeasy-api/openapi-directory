import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetDeploymentInstanceInput:
    r"""GetDeploymentInstanceInput
     Represents the input of a <code>GetDeploymentInstance</code> operation. 
    """
    
    deployment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    instance_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    
