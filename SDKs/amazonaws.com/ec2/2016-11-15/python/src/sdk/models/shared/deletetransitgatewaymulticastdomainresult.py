import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions:
    r"""DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
    The options for the transit gateway multicast domain.
    """
    
    auto_accept_shared_associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    igmpv2_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    static_sources_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain:
    r"""DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
    Information about the deleted transit gateway multicast domain.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    options: Optional[DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayMulticastDomainResult:
    transit_gateway_multicast_domain: Optional[DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain] = dataclasses.field(default=None)
    
