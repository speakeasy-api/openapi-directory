import dataclasses
from typing import Optional
from ..shared import fieldlevelencryption as shared_fieldlevelencryption


@dataclasses.dataclass
class GetFieldLevelEncryptionResult:
    field_level_encryption: Optional[shared_fieldlevelencryption.FieldLevelEncryption] = dataclasses.field(default=None)
    
