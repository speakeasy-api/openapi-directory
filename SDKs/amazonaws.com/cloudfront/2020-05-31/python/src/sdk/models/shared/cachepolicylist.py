import dataclasses
from typing import Optional
from ..shared import cachepolicysummarylist as shared_cachepolicysummarylist


@dataclasses.dataclass
class CachePolicyList:
    r"""CachePolicyList
    A list of cache policies.
    """
    
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_cachepolicysummarylist.CachePolicySummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
