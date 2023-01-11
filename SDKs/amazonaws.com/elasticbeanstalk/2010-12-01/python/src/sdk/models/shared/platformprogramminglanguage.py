import dataclasses
from typing import Optional


@dataclasses.dataclass
class PlatformProgrammingLanguage:
    r"""PlatformProgrammingLanguage
    A programming language supported by the platform.
    """
    
    name: Optional[str] = dataclasses.field(default=None)
    version: Optional[str] = dataclasses.field(default=None)
    
