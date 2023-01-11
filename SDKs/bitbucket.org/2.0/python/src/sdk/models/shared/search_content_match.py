import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import search_line as shared_search_line


@dataclass_json
@dataclasses.dataclass
class SearchContentMatch:
    lines: Optional[list[shared_search_line.SearchLine]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    
