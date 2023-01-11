import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers:
    r"""DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers
    Information about the deregistered members.
    """
    
    deregistered_network_interface_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    group_ip_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeregisterTransitGatewayMulticastGroupMembersResult:
    deregistered_multicast_group_members: Optional[DeregisterTransitGatewayMulticastGroupMembersResultDeregisteredMulticastGroupMembers] = dataclasses.field(default=None)
    
