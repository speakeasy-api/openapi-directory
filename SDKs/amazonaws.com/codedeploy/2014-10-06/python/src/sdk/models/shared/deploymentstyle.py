import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentoption_enum as shared_deploymentoption_enum
from ..shared import deploymenttype_enum as shared_deploymenttype_enum


@dataclass_json
@dataclasses.dataclass
class DeploymentStyle:
    r"""DeploymentStyle
    Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
    """
    
    deployment_option: Optional[shared_deploymentoption_enum.DeploymentOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentOption') }})
    deployment_type: Optional[shared_deploymenttype_enum.DeploymentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentType') }})
    
