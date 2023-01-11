import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EventCategoriesMapList:
    r"""EventCategoriesMapList
    Contains the results of a successful invocation of the <code>DescribeEventCategories</code> operation.
    """
    
    event_categories: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    source_type: Optional[str] = dataclasses.field(default=None)
    
