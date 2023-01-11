import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTrafficMirrorSessionResult:
    traffic_mirror_session_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
