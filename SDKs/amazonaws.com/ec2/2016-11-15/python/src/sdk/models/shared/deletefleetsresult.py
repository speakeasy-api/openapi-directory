import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteFleetsResult:
    successful_fleet_deletions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unsuccessful_fleet_deletions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
