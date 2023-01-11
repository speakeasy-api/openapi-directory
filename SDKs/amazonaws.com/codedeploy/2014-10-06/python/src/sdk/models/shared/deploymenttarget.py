import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudformationtarget as shared_cloudformationtarget
from ..shared import deploymenttargettype_enum as shared_deploymenttargettype_enum
from ..shared import ecstarget as shared_ecstarget
from ..shared import instancetarget as shared_instancetarget
from ..shared import lambdatarget as shared_lambdatarget


@dataclass_json
@dataclasses.dataclass
class DeploymentTarget:
    r"""DeploymentTarget
     Information about the deployment target. 
    """
    
    cloud_formation_target: Optional[shared_cloudformationtarget.CloudFormationTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFormationTarget') }})
    deployment_target_type: Optional[shared_deploymenttargettype_enum.DeploymentTargetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentTargetType') }})
    ecs_target: Optional[shared_ecstarget.EcsTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecsTarget') }})
    instance_target: Optional[shared_instancetarget.InstanceTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTarget') }})
    lambda_target: Optional[shared_lambdatarget.LambdaTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaTarget') }})
    
