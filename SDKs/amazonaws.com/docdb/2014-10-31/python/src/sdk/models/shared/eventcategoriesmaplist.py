import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EventCategoriesMapList:
    r"""EventCategoriesMapList
    An event source type, accompanied by one or more event category names.
    """
    
    event_categories: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    source_type: Optional[str] = dataclasses.field(default=None)
    
