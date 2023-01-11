import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetTransitGatewayAttachmentPropagationsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_propagations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
