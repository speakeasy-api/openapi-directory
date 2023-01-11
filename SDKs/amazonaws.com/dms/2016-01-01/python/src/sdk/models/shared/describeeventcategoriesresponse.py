import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventcategorygroup as shared_eventcategorygroup


@dataclass_json
@dataclasses.dataclass
class DescribeEventCategoriesResponse:
    r"""DescribeEventCategoriesResponse
    <p/>
    """
    
    event_category_group_list: Optional[list[shared_eventcategorygroup.EventCategoryGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventCategoryGroupList') }})
    
