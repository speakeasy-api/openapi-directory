import dataclasses
from typing import Optional
from ..shared import eventcategoriesmaplist as shared_eventcategoriesmaplist


@dataclasses.dataclass
class EventCategoriesMessage:
    r"""EventCategoriesMessage
    Represents the output of <a>DescribeEventCategories</a>.
    """
    
    event_categories_map_list: Optional[list[shared_eventcategoriesmaplist.EventCategoriesMapList]] = dataclasses.field(default=None)
    
