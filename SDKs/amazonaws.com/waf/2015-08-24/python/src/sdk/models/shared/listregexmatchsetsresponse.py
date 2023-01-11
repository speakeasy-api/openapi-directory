import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regexmatchsetsummary as shared_regexmatchsetsummary


@dataclass_json
@dataclasses.dataclass
class ListRegexMatchSetsResponse:
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    regex_match_sets: Optional[list[shared_regexmatchsetsummary.RegexMatchSetSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexMatchSets') }})
    
