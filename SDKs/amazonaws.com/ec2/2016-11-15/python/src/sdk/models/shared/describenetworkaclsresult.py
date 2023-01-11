import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeNetworkAclsResult:
    network_acls: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
