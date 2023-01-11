import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taggeddatabase as shared_taggeddatabase


@dataclass_json
@dataclasses.dataclass
class SearchDatabasesByLfTagsResponse:
    database_list: Optional[list[shared_taggeddatabase.TaggedDatabase]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatabaseList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
