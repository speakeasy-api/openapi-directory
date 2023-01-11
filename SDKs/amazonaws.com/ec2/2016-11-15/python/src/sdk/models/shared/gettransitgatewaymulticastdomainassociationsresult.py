import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetTransitGatewayMulticastDomainAssociationsResult:
    multicast_domain_associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
