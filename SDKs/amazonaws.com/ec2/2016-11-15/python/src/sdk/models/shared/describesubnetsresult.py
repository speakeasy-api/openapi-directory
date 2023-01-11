import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSubnetsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnets: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
