import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsElbLoadBalancerConnectionSettings:
    r"""AwsElbLoadBalancerConnectionSettings
    Contains connection settings for the load balancer.
    """
    
    idle_timeout: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdleTimeout') }})
    
