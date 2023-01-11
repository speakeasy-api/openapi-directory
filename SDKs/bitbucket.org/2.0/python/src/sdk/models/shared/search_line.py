import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import search_segment as shared_search_segment


@dataclass_json
@dataclasses.dataclass
class SearchLine:
    line: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    segments: Optional[list[shared_search_segment.SearchSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    
