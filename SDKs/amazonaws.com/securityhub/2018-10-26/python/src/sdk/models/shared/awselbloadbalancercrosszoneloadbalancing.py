import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsElbLoadBalancerCrossZoneLoadBalancing:
    r"""AwsElbLoadBalancerCrossZoneLoadBalancing
    Contains cross-zone load balancing settings for the load balancer.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    
