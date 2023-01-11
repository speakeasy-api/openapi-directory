import dataclasses
from typing import Optional


@dataclasses.dataclass
class RangeList:
    r"""RangeList
    A range of integer values.
    """
    
    from_: Optional[int] = dataclasses.field(default=None)
    step: Optional[int] = dataclasses.field(default=None)
    to: Optional[int] = dataclasses.field(default=None)
    
