import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutingendpointgroup as shared_customroutingendpointgroup


@dataclass_json
@dataclasses.dataclass
class DescribeCustomRoutingEndpointGroupResponse:
    endpoint_group: Optional[shared_customroutingendpointgroup.CustomRoutingEndpointGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroup') }})
    
