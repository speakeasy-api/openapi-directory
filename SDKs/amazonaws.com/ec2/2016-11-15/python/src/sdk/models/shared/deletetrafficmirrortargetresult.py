import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTrafficMirrorTargetResult:
    traffic_mirror_target_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
