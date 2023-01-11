import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import socketaddress as shared_socketaddress
from ..shared import customroutingdestinationtrafficstate_enum as shared_customroutingdestinationtrafficstate_enum
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum


@dataclass_json
@dataclasses.dataclass
class DestinationPortMapping:
    r"""DestinationPortMapping
    The port mappings for a specified endpoint IP address (destination).
    """
    
    accelerator_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorArn') }})
    accelerator_socket_addresses: Optional[list[shared_socketaddress.SocketAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorSocketAddresses') }})
    destination_socket_address: Optional[shared_socketaddress.SocketAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSocketAddress') }})
    destination_traffic_state: Optional[shared_customroutingdestinationtrafficstate_enum.CustomRoutingDestinationTrafficStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationTrafficState') }})
    endpoint_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_group_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupRegion') }})
    endpoint_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    ip_address_type: Optional[shared_ipaddresstype_enum.IPAddressTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddressType') }})
    
