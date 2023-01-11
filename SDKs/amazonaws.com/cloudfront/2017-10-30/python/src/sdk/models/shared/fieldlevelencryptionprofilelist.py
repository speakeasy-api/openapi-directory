import dataclasses
from typing import Optional
from ..shared import fieldlevelencryptionprofilesummarylist as shared_fieldlevelencryptionprofilesummarylist


@dataclasses.dataclass
class FieldLevelEncryptionProfileList:
    r"""FieldLevelEncryptionProfileList
    List of field-level encryption profiles.
    """
    
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_fieldlevelencryptionprofilesummarylist.FieldLevelEncryptionProfileSummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
