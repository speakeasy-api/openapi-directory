import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsElbLoadBalancerInstance:
    r"""AwsElbLoadBalancerInstance
    Provides information about an EC2 instance for a load balancer.
    """
    
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    
