import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTrafficMirrorFilterResult:
    traffic_mirror_filter_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
