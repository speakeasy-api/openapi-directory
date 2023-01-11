import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources:
    r"""DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources
    Information about the deregistered group sources.
    """
    
    deregistered_network_interface_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    group_ip_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeregisterTransitGatewayMulticastGroupSourcesResult:
    deregistered_multicast_group_sources: Optional[DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources] = dataclasses.field(default=None)
    
