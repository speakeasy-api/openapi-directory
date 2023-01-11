import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categoryproperties as shared_categoryproperties


@dataclass_json
@dataclasses.dataclass
class ListCallAnalyticsCategoriesResponse:
    categories: Optional[list[shared_categoryproperties.CategoryProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Categories') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
