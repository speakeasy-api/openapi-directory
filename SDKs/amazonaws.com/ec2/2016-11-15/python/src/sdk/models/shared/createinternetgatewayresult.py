import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateInternetGatewayResultInternetGateway:
    r"""CreateInternetGatewayResultInternetGateway
    Information about the internet gateway.
    """
    
    attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    internet_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateInternetGatewayResult:
    internet_gateway: Optional[CreateInternetGatewayResultInternetGateway] = dataclasses.field(default=None)
    
