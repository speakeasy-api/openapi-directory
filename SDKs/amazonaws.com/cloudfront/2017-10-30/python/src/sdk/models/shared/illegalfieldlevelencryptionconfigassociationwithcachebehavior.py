import dataclasses
from typing import Optional


@dataclasses.dataclass
class IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior:
    r"""IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
    The specified configuration for field-level encryption can't be associated with the specified cache behavior.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
