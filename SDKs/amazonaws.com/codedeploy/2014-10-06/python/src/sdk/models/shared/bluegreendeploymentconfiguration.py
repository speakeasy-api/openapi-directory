import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentreadyoption as shared_deploymentreadyoption
from ..shared import greenfleetprovisioningoption as shared_greenfleetprovisioningoption
from ..shared import blueinstanceterminationoption as shared_blueinstanceterminationoption


@dataclass_json
@dataclasses.dataclass
class BlueGreenDeploymentConfiguration:
    r"""BlueGreenDeploymentConfiguration
    Information about blue/green deployment options for a deployment group.
    """
    
    deployment_ready_option: Optional[shared_deploymentreadyoption.DeploymentReadyOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentReadyOption') }})
    green_fleet_provisioning_option: Optional[shared_greenfleetprovisioningoption.GreenFleetProvisioningOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greenFleetProvisioningOption') }})
    terminate_blue_instances_on_deployment_success: Optional[shared_blueinstanceterminationoption.BlueInstanceTerminationOption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminateBlueInstancesOnDeploymentSuccess') }})
    
