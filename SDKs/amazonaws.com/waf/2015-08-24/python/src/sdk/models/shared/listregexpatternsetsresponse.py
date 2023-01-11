import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regexpatternsetsummary as shared_regexpatternsetsummary


@dataclass_json
@dataclasses.dataclass
class ListRegexPatternSetsResponse:
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    regex_pattern_sets: Optional[list[shared_regexpatternsetsummary.RegexPatternSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexPatternSets') }})
    
