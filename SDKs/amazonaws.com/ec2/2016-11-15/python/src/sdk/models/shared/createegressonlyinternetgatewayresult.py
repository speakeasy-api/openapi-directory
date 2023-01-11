import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway:
    r"""CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway
    Information about the egress-only internet gateway.
    """
    
    attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    egress_only_internet_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateEgressOnlyInternetGatewayResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    egress_only_internet_gateway: Optional[CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway] = dataclasses.field(default=None)
    
