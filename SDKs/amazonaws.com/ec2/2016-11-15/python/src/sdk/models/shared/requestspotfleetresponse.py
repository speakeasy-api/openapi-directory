import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RequestSpotFleetResponse:
    r"""RequestSpotFleetResponse
    Contains the output of RequestSpotFleet.
    """
    
    spot_fleet_request_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
