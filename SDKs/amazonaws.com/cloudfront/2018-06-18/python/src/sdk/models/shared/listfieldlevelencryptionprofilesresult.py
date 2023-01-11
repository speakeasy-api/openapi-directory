import dataclasses
from typing import Optional
from ..shared import fieldlevelencryptionprofilelist as shared_fieldlevelencryptionprofilelist


@dataclasses.dataclass
class ListFieldLevelEncryptionProfilesResult:
    field_level_encryption_profile_list: Optional[shared_fieldlevelencryptionprofilelist.FieldLevelEncryptionProfileList] = dataclasses.field(default=None)
    
