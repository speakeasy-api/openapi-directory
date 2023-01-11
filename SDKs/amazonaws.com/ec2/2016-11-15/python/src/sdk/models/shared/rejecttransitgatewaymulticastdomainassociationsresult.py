import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RejectTransitGatewayMulticastDomainAssociationsResultAssociations:
    r"""RejectTransitGatewayMulticastDomainAssociationsResultAssociations
    Describes the multicast domain associations.
    """
    
    resource_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnets: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RejectTransitGatewayMulticastDomainAssociationsResult:
    associations: Optional[RejectTransitGatewayMulticastDomainAssociationsResultAssociations] = dataclasses.field(default=None)
    
