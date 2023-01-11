import dataclasses
from typing import Optional
from ..shared import fieldlevelencryptionprofileconfig as shared_fieldlevelencryptionprofileconfig


@dataclasses.dataclass
class GetFieldLevelEncryptionProfileConfigResult:
    field_level_encryption_profile_config: Optional[shared_fieldlevelencryptionprofileconfig.FieldLevelEncryptionProfileConfig] = dataclasses.field(default=None)
    
