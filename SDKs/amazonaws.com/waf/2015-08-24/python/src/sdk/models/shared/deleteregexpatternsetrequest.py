import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteRegexPatternSetRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    regex_pattern_set_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegexPatternSetId') }})
    
