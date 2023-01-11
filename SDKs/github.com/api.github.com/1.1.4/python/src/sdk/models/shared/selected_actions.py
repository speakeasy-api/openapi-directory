import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SelectedActions:
    github_owned_allowed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('github_owned_allowed') }})
    patterns_allowed: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns_allowed') }})
    verified_allowed: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified_allowed') }})
    
