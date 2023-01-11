import dataclasses
from typing import Optional
from ..shared import fieldlevelencryptionlist as shared_fieldlevelencryptionlist


@dataclasses.dataclass
class ListFieldLevelEncryptionConfigsResult:
    field_level_encryption_list: Optional[shared_fieldlevelencryptionlist.FieldLevelEncryptionList] = dataclasses.field(default=None)
    
