import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regexmatchsetupdate as shared_regexmatchsetupdate


@dataclass_json
@dataclasses.dataclass
class UpdateRegexMatchSetRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    regex_match_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexMatchSetId') }})
    updates: list[shared_regexmatchsetupdate.RegexMatchSetUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Updates') }})
    
