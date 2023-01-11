import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeInstanceStatusResult:
    instance_statuses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
