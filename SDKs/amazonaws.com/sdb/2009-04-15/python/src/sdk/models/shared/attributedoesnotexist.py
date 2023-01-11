import dataclasses
from typing import Optional


@dataclasses.dataclass
class AttributeDoesNotExist:
    r"""AttributeDoesNotExist
    The specified attribute does not exist.
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
