import dataclasses
from typing import Optional


@dataclasses.dataclass
class TagList:
    r"""TagList
     A complex type that contains <code>Tag</code> key and <code>Tag</code> value.
    """
    
    key: str = dataclasses.field()
    value: Optional[str] = dataclasses.field(default=None)
    
