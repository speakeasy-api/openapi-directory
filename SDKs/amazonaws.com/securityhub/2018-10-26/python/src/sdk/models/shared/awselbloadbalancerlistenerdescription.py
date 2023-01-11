import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awselbloadbalancerlistener as shared_awselbloadbalancerlistener


@dataclass_json
@dataclasses.dataclass
class AwsElbLoadBalancerListenerDescription:
    r"""AwsElbLoadBalancerListenerDescription
    Lists the policies that are enabled for a load balancer listener.
    """
    
    listener: Optional[shared_awselbloadbalancerlistener.AwsElbLoadBalancerListener] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Listener') }})
    policy_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyNames') }})
    
