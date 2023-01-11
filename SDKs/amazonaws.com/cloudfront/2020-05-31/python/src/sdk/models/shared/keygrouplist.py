import dataclasses
from typing import Optional
from ..shared import keygroupsummarylist as shared_keygroupsummarylist


@dataclasses.dataclass
class KeyGroupList:
    r"""KeyGroupList
    A list of key groups.
    """
    
    max_items: int = dataclasses.field()
    quantity: int = dataclasses.field()
    items: Optional[list[shared_keygroupsummarylist.KeyGroupSummaryList]] = dataclasses.field(default=None)
    next_marker: Optional[str] = dataclasses.field(default=None)
    
