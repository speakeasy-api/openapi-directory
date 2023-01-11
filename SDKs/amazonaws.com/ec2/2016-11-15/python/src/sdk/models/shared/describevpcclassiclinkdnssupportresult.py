import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcClassicLinkDNSSupportResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpcs: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
