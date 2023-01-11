import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTransitGatewayAttachmentsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
