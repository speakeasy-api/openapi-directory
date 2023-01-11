import dataclasses
from typing import Optional


@dataclasses.dataclass
class CharacterSet:
    r"""CharacterSet
    Specifies a character set.
    """
    
    character_set_description: Optional[str] = dataclasses.field(default=None)
    character_set_name: Optional[str] = dataclasses.field(default=None)
    
