import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions:
    r"""CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
    The options for the transit gateway multicast domain.
    """
    
    auto_accept_shared_associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    igmpv2_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    static_sources_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain:
    r"""CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
    Information about the transit gateway multicast domain.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    options: Optional[CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayMulticastDomainResult:
    transit_gateway_multicast_domain: Optional[CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain] = dataclasses.field(default=None)
    
