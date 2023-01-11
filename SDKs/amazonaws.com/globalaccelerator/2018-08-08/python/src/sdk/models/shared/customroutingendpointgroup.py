import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutingdestinationdescription as shared_customroutingdestinationdescription
from ..shared import customroutingendpointdescription as shared_customroutingendpointdescription


@dataclass_json
@dataclasses.dataclass
class CustomRoutingEndpointGroup:
    r"""CustomRoutingEndpointGroup
    A complex type for the endpoint group for a custom routing accelerator. An AWS Region can have only one endpoint group for a specific listener. 
    """
    
    destination_descriptions: Optional[list[shared_customroutingdestinationdescription.CustomRoutingDestinationDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationDescriptions') }})
    endpoint_descriptions: Optional[list[shared_customroutingendpointdescription.CustomRoutingEndpointDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDescriptions') }})
    endpoint_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_group_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupRegion') }})
    
