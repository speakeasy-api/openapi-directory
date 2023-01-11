import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DistributionIDList:
    r"""DistributionIDList
    A list of distribution IDs.
    """
    
    is_truncated: bool = dataclasses.field()
    marker: str = dataclasses.field()
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
