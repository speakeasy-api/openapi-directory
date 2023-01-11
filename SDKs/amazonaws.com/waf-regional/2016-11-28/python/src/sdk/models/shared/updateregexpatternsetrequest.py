import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regexpatternsetupdate as shared_regexpatternsetupdate


@dataclass_json
@dataclasses.dataclass
class UpdateRegexPatternSetRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    regex_pattern_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexPatternSetId') }})
    updates: list[shared_regexpatternsetupdate.RegexPatternSetUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
