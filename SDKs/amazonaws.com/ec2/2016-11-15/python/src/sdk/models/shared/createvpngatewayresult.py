import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateVpnGatewayResultVpnGateway:
    r"""CreateVpnGatewayResultVpnGateway
    Information about the virtual private gateway.
    """
    
    amazon_side_asn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    availability_zone: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpn_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVpnGatewayResult:
    r"""CreateVpnGatewayResult
    Contains the output of CreateVpnGateway.
    """
    
    vpn_gateway: Optional[CreateVpnGatewayResultVpnGateway] = dataclasses.field(default=None)
    
