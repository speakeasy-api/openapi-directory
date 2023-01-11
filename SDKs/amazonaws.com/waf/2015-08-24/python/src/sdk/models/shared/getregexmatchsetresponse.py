import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regexmatchset as shared_regexmatchset


@dataclass_json
@dataclasses.dataclass
class GetRegexMatchSetResponse:
    regex_match_set: Optional[shared_regexmatchset.RegexMatchSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexMatchSet') }})
    
