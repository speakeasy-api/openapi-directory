import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeStaleSecurityGroupsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    stale_security_group_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
