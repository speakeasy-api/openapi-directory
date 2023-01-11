import dataclasses
from typing import Optional


@dataclasses.dataclass
class FieldLevelEncryptionConfigAlreadyExists:
    r"""FieldLevelEncryptionConfigAlreadyExists
    The specified configuration for field-level encryption already exists.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
