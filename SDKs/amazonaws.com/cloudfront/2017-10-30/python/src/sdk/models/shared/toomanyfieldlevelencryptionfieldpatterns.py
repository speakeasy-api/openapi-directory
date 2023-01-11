import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyFieldLevelEncryptionFieldPatterns:
    r"""TooManyFieldLevelEncryptionFieldPatterns
    The maximum number of field patterns for field-level encryption have been created.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
