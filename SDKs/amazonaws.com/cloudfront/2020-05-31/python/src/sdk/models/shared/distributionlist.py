import dataclasses
from typing import Optional
from ..shared import distributionsummarylist as shared_distributionsummarylist


@dataclasses.dataclass
class DistributionList:
    r"""DistributionList
    A distribution list.
    """
    
    is_truncated: bool = dataclasses.field()
    marker: str = dataclasses.field()
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_distributionsummarylist.DistributionSummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
