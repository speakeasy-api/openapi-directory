import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regexpatternset as shared_regexpatternset


@dataclass_json
@dataclasses.dataclass
class CreateRegexPatternSetResponse:
    change_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    regex_pattern_set: Optional[shared_regexpatternset.RegexPatternSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexPatternSet') }})
    
