import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DisassociateTransitGatewayMulticastDomainResultAssociations:
    r"""DisassociateTransitGatewayMulticastDomainResultAssociations
    Information about the association.
    """
    
    resource_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnets: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_multicast_domain_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateTransitGatewayMulticastDomainResult:
    associations: Optional[DisassociateTransitGatewayMulticastDomainResultAssociations] = dataclasses.field(default=None)
    
