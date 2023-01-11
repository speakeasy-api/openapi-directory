import dataclasses
from typing import Optional


@dataclasses.dataclass
class OptionRestrictionRegex:
    r"""OptionRestrictionRegex
    A regular expression representing a restriction on a string configuration option value.
    """
    
    label: Optional[str] = dataclasses.field(default=None)
    pattern: Optional[str] = dataclasses.field(default=None)
    
