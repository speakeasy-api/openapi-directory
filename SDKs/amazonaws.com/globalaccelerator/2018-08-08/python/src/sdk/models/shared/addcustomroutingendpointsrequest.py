import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutingendpointconfiguration as shared_customroutingendpointconfiguration


@dataclass_json
@dataclasses.dataclass
class AddCustomRoutingEndpointsRequest:
    endpoint_configurations: list[shared_customroutingendpointconfiguration.CustomRoutingEndpointConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfigurations') }})
    endpoint_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    
