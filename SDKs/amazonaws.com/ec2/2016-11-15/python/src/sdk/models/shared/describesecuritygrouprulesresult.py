import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSecurityGroupRulesResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    security_group_rules: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
