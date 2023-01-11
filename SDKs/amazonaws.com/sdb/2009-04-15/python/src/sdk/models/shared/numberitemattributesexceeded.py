import dataclasses
from typing import Optional


@dataclasses.dataclass
class NumberItemAttributesExceeded:
    r"""NumberItemAttributesExceeded
    Too many attributes in this item.
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
