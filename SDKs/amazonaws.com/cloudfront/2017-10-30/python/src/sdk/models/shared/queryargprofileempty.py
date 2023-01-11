import dataclasses
from typing import Optional


@dataclasses.dataclass
class QueryArgProfileEmpty:
    r"""QueryArgProfileEmpty
    No profile specified for the field-level encryption query argument.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
