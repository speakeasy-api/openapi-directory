import dataclasses
from typing import Optional
from ..shared import fieldlevelencryptionsummarylist as shared_fieldlevelencryptionsummarylist


@dataclasses.dataclass
class FieldLevelEncryptionList:
    r"""FieldLevelEncryptionList
    List of field-level encrpytion configurations.
    """
    
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_fieldlevelencryptionsummarylist.FieldLevelEncryptionSummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
