import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateFleetResult:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fleet_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instances: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
