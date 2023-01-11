import dataclasses
from typing import Optional
from ..shared import fieldlevelencryptionprofile as shared_fieldlevelencryptionprofile


@dataclasses.dataclass
class GetFieldLevelEncryptionProfileResult:
    field_level_encryption_profile: Optional[shared_fieldlevelencryptionprofile.FieldLevelEncryptionProfile] = dataclasses.field(default=None)
    
