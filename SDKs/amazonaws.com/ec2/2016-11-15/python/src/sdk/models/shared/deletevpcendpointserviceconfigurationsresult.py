import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteVpcEndpointServiceConfigurationsResult:
    unsuccessful: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
