import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeLocalGatewaysResult:
    local_gateways: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
