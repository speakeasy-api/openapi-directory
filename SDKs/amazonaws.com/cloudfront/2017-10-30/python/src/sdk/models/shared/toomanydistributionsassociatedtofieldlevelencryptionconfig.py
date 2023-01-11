import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyDistributionsAssociatedToFieldLevelEncryptionConfig:
    r"""TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
    The maximum number of distributions have been associated with the specified configuration for field-level encryption.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
