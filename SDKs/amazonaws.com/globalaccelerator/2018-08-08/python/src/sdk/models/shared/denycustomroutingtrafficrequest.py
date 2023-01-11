import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DenyCustomRoutingTrafficRequest:
    endpoint_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    deny_all_traffic_to_endpoint: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DenyAllTrafficToEndpoint') }})
    destination_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationAddresses') }})
    destination_ports: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationPorts') }})
    
