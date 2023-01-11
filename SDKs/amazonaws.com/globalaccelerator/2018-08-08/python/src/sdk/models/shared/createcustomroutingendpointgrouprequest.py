import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutingdestinationconfiguration as shared_customroutingdestinationconfiguration


@dataclass_json
@dataclasses.dataclass
class CreateCustomRoutingEndpointGroupRequest:
    destination_configurations: list[shared_customroutingdestinationconfiguration.CustomRoutingDestinationConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationConfigurations') }})
    endpoint_group_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupRegion') }})
    idempotency_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    listener_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListenerArn') }})
    
