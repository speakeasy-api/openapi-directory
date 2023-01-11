import dataclasses
from typing import Optional


@dataclasses.dataclass
class Tag:
    r"""Tag
    Describes a tag applied to a resource in an environment.
    """
    
    key: Optional[str] = dataclasses.field(default=None)
    value: Optional[str] = dataclasses.field(default=None)
    
