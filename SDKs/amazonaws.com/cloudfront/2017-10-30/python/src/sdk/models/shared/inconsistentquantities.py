import dataclasses
from typing import Optional


@dataclasses.dataclass
class InconsistentQuantities:
    r"""InconsistentQuantities
    The value of <code>Quantity</code> and the size of <code>Items</code> don't match.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
