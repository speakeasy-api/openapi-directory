import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrafficRoute:
    r"""TrafficRoute
     Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. 
    """
    
    listener_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listenerArns') }})
    
