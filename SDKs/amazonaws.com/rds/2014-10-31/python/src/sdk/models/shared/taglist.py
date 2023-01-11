import dataclasses
from typing import Optional


@dataclasses.dataclass
class TagList:
    r"""TagList
    Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
    """
    
    key: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
