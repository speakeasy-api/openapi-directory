import dataclasses
from typing import Optional


@dataclasses.dataclass
class Queue:
    r"""Queue
    Describes a queue.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
