import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribePlacementGroupsResult:
    placement_groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
