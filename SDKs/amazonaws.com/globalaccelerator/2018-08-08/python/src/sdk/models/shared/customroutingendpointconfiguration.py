import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomRoutingEndpointConfiguration:
    r"""CustomRoutingEndpointConfiguration
    The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.
    """
    
    endpoint_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    
