import dataclasses
from typing import Optional


@dataclasses.dataclass
class Tag:
    r"""Tag
    Information about a tag.
    """
    
    key: str = dataclasses.field()
    value: Optional[str] = dataclasses.field(default=None)
    
