import dataclasses
from typing import Optional
from ..shared import encryptionentities as shared_encryptionentities


@dataclasses.dataclass
class FieldLevelEncryptionProfileConfig:
    r"""FieldLevelEncryptionProfileConfig
    A complex data type of profiles for the field-level encryption.
    """
    
    caller_reference: str = dataclasses.field()
    encryption_entities: shared_encryptionentities.EncryptionEntities = dataclasses.field()
    name: str = dataclasses.field()
    comment: Optional[str] = dataclasses.field(default=None)
    
