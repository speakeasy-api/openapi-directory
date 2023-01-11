import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeTransitGatewayVpcAttachmentsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_vpc_attachments: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
