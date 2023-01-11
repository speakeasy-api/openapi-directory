import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetDeploymentConfigInput:
    r"""GetDeploymentConfigInput
    Represents the input of a <code>GetDeploymentConfig</code> operation.
    """
    
    deployment_config_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    
