import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyFieldLevelEncryptionEncryptionEntities:
    r"""TooManyFieldLevelEncryptionEncryptionEntities
    The maximum number of encryption entities for field-level encryption have been created.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
