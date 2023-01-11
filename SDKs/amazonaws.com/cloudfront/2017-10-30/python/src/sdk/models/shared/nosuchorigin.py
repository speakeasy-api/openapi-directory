import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchOrigin:
    r"""NoSuchOrigin
    No origin exists with the specified <code>Origin Id</code>. 
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
