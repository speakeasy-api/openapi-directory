import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidDefaultRootObject:
    r"""InvalidDefaultRootObject
    The default root object file name is too big or contains an invalid character.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
