import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateTransitGatewayMulticastDomainResultAssociations:
    r"""AssociateTransitGatewayMulticastDomainResultAssociations
    Information about the transit gateway multicast domain associations.
    """
    
    resource_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnets: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateTransitGatewayMulticastDomainResult:
    associations: Optional[AssociateTransitGatewayMulticastDomainResultAssociations] = dataclasses.field(default=None)
    
