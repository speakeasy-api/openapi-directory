import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeIpv6PoolsResult:
    ipv6_pools: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
