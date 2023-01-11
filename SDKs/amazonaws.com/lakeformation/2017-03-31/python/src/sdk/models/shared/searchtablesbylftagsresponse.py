import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taggedtable as shared_taggedtable


@dataclass_json
@dataclasses.dataclass
class SearchTablesByLfTagsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    table_list: Optional[list[shared_taggedtable.TaggedTable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableList') }})
    
