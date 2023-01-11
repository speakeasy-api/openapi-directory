import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyFieldLevelEncryptionProfiles:
    r"""TooManyFieldLevelEncryptionProfiles
    The maximum number of profiles for field-level encryption have been created.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
