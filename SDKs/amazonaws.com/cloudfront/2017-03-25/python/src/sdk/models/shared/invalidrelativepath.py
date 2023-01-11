import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidRelativePath:
    r"""InvalidRelativePath
    The relative path is too big, is not URL-encoded, or does not begin with a slash (/).
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
