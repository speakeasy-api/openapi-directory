import dataclasses
from typing import Optional
from ..shared import eventinfomaplist as shared_eventinfomaplist


@dataclasses.dataclass
class EventCategoriesMapList:
    r"""EventCategoriesMapList
    Describes event categories.
    """
    
    events: Optional[list[shared_eventinfomaplist.EventInfoMapList]] = dataclasses.field(default=None)
    source_type: Optional[str] = dataclasses.field(default=None)
    
