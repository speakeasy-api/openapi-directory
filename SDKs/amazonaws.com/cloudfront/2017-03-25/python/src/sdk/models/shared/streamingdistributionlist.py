import dataclasses
from typing import Optional
from ..shared import streamingdistributionsummarylist as shared_streamingdistributionsummarylist


@dataclasses.dataclass
class StreamingDistributionList:
    r"""StreamingDistributionList
    A streaming distribution list. 
    """
    
    is_truncated: bool = dataclasses.field()
    marker: str = dataclasses.field()
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_streamingdistributionsummarylist.StreamingDistributionSummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
