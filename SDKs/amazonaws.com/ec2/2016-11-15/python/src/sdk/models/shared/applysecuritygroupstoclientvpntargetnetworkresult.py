import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ApplySecurityGroupsToClientVpnTargetNetworkResult:
    security_group_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
