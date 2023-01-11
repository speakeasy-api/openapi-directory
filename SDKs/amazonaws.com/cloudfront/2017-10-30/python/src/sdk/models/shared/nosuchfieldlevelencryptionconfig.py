import dataclasses
from typing import Optional


@dataclasses.dataclass
class NoSuchFieldLevelEncryptionConfig:
    r"""NoSuchFieldLevelEncryptionConfig
    The specified configuration for field-level encryption doesn't exist.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
