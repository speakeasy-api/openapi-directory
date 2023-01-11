import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listtagoptionsfilters as shared_listtagoptionsfilters


@dataclass_json
@dataclasses.dataclass
class ListTagOptionsInput:
    filters: Optional[shared_listtagoptionsfilters.ListTagOptionsFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    
