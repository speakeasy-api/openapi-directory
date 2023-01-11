import dataclasses
from typing import Optional


@dataclasses.dataclass
class FieldLevelEncryptionProfileInUse:
    r"""FieldLevelEncryptionProfileInUse
    The specified profile for field-level encryption is in use.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
