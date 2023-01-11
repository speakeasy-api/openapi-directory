import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifySpotFleetRequestResponse:
    r"""ModifySpotFleetRequestResponse
    Contains the output of ModifySpotFleetRequest.
    """
    
    return_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
