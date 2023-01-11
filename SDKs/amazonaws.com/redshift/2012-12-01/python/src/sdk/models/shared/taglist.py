import dataclasses
from typing import Optional


@dataclasses.dataclass
class TagList:
    r"""TagList
    A tag consisting of a name/value pair for a resource.
    """
    
    key: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
