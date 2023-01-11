import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import search_content_match as shared_search_content_match
from ..shared import search_segment as shared_search_segment


@dataclass_json
@dataclasses.dataclass
class SearchCodeSearchResult:
    content_match_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_match_count') }})
    content_matches: Optional[list[shared_search_content_match.SearchContentMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_matches') }})
    file: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    path_matches: Optional[list[shared_search_segment.SearchSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path_matches') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
