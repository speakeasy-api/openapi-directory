import dataclasses
from typing import Optional


@dataclasses.dataclass
class DoubleRangeList:
    r"""DoubleRangeList
    A range of double values.
    """
    
    from_: Optional[float] = dataclasses.field(default=None)
    to: Optional[float] = dataclasses.field(default=None)
    
