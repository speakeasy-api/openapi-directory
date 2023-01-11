import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSecurityGroupsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    security_groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
