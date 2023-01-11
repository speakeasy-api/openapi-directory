import dataclasses
from typing import Optional


@dataclasses.dataclass
class FieldLevelEncryptionConfigInUse:
    r"""FieldLevelEncryptionConfigInUse
    The specified configuration for field-level encryption is in use.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
