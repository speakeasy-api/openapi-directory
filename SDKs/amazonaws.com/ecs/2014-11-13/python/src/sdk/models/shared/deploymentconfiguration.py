import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deploymentcircuitbreaker as shared_deploymentcircuitbreaker


@dataclass_json
@dataclasses.dataclass
class DeploymentConfiguration:
    r"""DeploymentConfiguration
    Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
    """
    
    deployment_circuit_breaker: Optional[shared_deploymentcircuitbreaker.DeploymentCircuitBreaker] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentCircuitBreaker') }})
    maximum_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPercent') }})
    minimum_healthy_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumHealthyPercent') }})
    
