import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchFieldLevelEncryptionProfile:
    r"""NoSuchFieldLevelEncryptionProfile
    The specified profile for field-level encryption doesn't exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
