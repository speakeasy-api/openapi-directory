import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeInstancesResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    reservations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
