import dataclasses
from typing import Optional


@dataclasses.dataclass
class FieldLevelEncryptionProfileSizeExceeded:
    r"""FieldLevelEncryptionProfileSizeExceeded
    The maximum size of a profile for field-level encryption was exceeded.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
