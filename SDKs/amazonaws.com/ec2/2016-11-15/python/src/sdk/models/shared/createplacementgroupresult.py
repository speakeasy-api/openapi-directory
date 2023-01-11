import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreatePlacementGroupResultPlacementGroup:
    r"""CreatePlacementGroupResultPlacementGroup
    Describes a placement group.
    """
    
    group_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    group_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    partition_count: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    strategy: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreatePlacementGroupResult:
    placement_group: Optional[CreatePlacementGroupResultPlacementGroup] = dataclasses.field(default=None)
    
