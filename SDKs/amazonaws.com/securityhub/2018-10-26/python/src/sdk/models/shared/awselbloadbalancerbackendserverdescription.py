import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsElbLoadBalancerBackendServerDescription:
    r"""AwsElbLoadBalancerBackendServerDescription
    Provides information about the configuration of an EC2 instance for the load balancer.
    """
    
    instance_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancePort') }})
    policy_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyNames') }})
    
