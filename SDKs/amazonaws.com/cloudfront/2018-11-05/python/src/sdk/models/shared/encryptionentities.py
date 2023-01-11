import dataclasses
from typing import Optional
from ..shared import encryptionentitylist as shared_encryptionentitylist


@dataclasses.dataclass
class EncryptionEntities:
    r"""EncryptionEntities
    Complex data type for field-level encryption profiles that includes all of the encryption entities. 
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_encryptionentitylist.EncryptionEntityList]] = dataclasses.field(default=None)
    
