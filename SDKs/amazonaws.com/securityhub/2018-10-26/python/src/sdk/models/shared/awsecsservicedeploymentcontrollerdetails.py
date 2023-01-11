import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEcsServiceDeploymentControllerDetails:
    r"""AwsEcsServiceDeploymentControllerDetails
    Information about the deployment controller type that the service uses.
    """
    
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
