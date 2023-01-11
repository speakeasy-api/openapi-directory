import dataclasses
from typing import Optional
from ..shared import itemlist as shared_itemlist


@dataclasses.dataclass
class SelectResult:
    items: Optional[list[shared_itemlist.ItemList]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
