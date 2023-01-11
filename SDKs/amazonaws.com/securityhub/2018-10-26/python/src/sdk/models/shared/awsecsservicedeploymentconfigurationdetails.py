import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecsservicedeploymentconfigurationdeploymentcircuitbreakerdetails as shared_awsecsservicedeploymentconfigurationdeploymentcircuitbreakerdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsServiceDeploymentConfigurationDetails:
    r"""AwsEcsServiceDeploymentConfigurationDetails
    Optional deployment parameters for the service.
    """
    
    deployment_circuit_breaker: Optional[shared_awsecsservicedeploymentconfigurationdeploymentcircuitbreakerdetails.AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentCircuitBreaker') }})
    maximum_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPercent') }})
    minimum_healthy_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumHealthyPercent') }})
    
