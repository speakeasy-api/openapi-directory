import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lftag as shared_lftag


@dataclass_json
@dataclasses.dataclass
class SearchTablesByLfTagsRequest:
    expression: list[shared_lftag.LfTag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
