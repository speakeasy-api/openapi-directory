import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeplatform_enum as shared_computeplatform_enum
from ..shared import minimumhealthyhosts as shared_minimumhealthyhosts
from ..shared import trafficroutingconfig as shared_trafficroutingconfig


@dataclass_json
@dataclasses.dataclass
class CreateDeploymentConfigInput:
    r"""CreateDeploymentConfigInput
    Represents the input of a <code>CreateDeploymentConfig</code> operation.
    """
    
    deployment_config_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigName') }})
    compute_platform: Optional[shared_computeplatform_enum.ComputePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    minimum_healthy_hosts: Optional[shared_minimumhealthyhosts.MinimumHealthyHosts] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumHealthyHosts') }})
    traffic_routing_config: Optional[shared_trafficroutingconfig.TrafficRoutingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficRoutingConfig') }})
    
