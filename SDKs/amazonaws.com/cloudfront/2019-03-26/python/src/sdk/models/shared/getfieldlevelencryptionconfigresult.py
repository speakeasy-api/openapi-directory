import dataclasses
from typing import Optional
from ..shared import fieldlevelencryptionconfig as shared_fieldlevelencryptionconfig


@dataclasses.dataclass
class GetFieldLevelEncryptionConfigResult:
    field_level_encryption_config: Optional[shared_fieldlevelencryptionconfig.FieldLevelEncryptionConfig] = dataclasses.field(default=None)
    
