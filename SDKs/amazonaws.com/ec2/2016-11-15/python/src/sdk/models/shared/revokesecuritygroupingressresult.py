import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RevokeSecurityGroupIngressResult:
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unknown_ip_permissions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
