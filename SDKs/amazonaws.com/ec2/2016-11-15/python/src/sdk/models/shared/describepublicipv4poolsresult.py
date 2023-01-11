import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribePublicIpv4PoolsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    public_ipv4_pools: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
