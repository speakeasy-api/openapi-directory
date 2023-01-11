import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyFieldLevelEncryptionQueryArgProfiles:
    r"""TooManyFieldLevelEncryptionQueryArgProfiles
    The maximum number of query arg profiles for field-level encryption have been created.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
