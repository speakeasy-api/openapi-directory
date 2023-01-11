import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources:
    r"""RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources
    Information about the transit gateway multicast group sources.
    """
    
    group_ip_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    registered_network_interface_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RegisterTransitGatewayMulticastGroupSourcesResult:
    registered_multicast_group_sources: Optional[RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources] = dataclasses.field(default=None)
    
