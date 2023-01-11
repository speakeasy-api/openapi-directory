import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutingendpointdescription as shared_customroutingendpointdescription


@dataclass_json
@dataclasses.dataclass
class AddCustomRoutingEndpointsResponse:
    endpoint_descriptions: Optional[list[shared_customroutingendpointdescription.CustomRoutingEndpointDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDescriptions') }})
    endpoint_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    
