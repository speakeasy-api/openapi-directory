import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EventInfoMapList:
    r"""EventInfoMapList
    Describes event information.
    """
    
    event_categories: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    event_description: Optional[str] = dataclasses.field(default=None)
    event_id: Optional[str] = dataclasses.field(default=None)
    severity: Optional[str] = dataclasses.field(default=None)
    
