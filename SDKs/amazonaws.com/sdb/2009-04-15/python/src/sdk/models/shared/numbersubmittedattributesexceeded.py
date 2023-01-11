import dataclasses
from typing import Optional


@dataclasses.dataclass
class NumberSubmittedAttributesExceeded:
    r"""NumberSubmittedAttributesExceeded
    Too many attributes exist in a single call.
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
