import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteVpcEndpointsResult:
    r"""DeleteVpcEndpointsResult
    Contains the output of DeleteVpcEndpoints.
    """
    
    unsuccessful: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
