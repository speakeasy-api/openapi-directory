import dataclasses
from typing import Optional


@dataclasses.dataclass
class Instance:
    r"""Instance
    The description of an Amazon EC2 instance.
    """
    
    id: Optional[str] = dataclasses.field(default=None)
    
