import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import socketaddress as shared_socketaddress
from ..shared import customroutingdestinationtrafficstate_enum as shared_customroutingdestinationtrafficstate_enum
from ..shared import customroutingprotocol_enum as shared_customroutingprotocol_enum


@dataclass_json
@dataclasses.dataclass
class PortMapping:
    r"""PortMapping
    Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in AWS Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets. 
    """
    
    accelerator_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceleratorPort') }})
    destination_socket_address: Optional[shared_socketaddress.SocketAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSocketAddress') }})
    destination_traffic_state: Optional[shared_customroutingdestinationtrafficstate_enum.CustomRoutingDestinationTrafficStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationTrafficState') }})
    endpoint_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    protocols: Optional[list[shared_customroutingprotocol_enum.CustomRoutingProtocolEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocols') }})
    
