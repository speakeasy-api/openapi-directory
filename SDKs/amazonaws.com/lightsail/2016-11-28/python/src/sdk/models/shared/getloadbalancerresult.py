import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loadbalancer as shared_loadbalancer


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerResult:
    load_balancer: Optional[shared_loadbalancer.LoadBalancer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancer') }})
    
