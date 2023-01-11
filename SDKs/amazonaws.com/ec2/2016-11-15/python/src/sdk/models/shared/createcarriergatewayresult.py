import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateCarrierGatewayResultCarrierGateway:
    r"""CreateCarrierGatewayResultCarrierGateway
    Information about the carrier gateway.
    """
    
    carrier_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCarrierGatewayResult:
    carrier_gateway: Optional[CreateCarrierGatewayResultCarrierGateway] = dataclasses.field(default=None)
    
