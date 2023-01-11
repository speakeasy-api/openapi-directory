import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers:
    r"""RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers
    Information about the registered transit gateway multicast group members.
    """
    
    group_ip_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    registered_network_interface_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RegisterTransitGatewayMulticastGroupMembersResult:
    registered_multicast_group_members: Optional[RegisterTransitGatewayMulticastGroupMembersResultRegisteredMulticastGroupMembers] = dataclasses.field(default=None)
    
