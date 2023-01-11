import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVolumesModificationsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volumes_modifications: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
