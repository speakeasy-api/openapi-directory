import dataclasses
from typing import Optional


@dataclasses.dataclass
class FieldLevelEncryptionProfileAlreadyExists:
    r"""FieldLevelEncryptionProfileAlreadyExists
    The specified profile for field-level encryption already exists.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
