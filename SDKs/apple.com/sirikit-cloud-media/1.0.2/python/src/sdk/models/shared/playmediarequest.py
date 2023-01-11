import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import constraints as shared_constraints
from ..shared import useractivity as shared_useractivity


@dataclass_json
@dataclasses.dataclass
class PlayMediaRequest:
    constraints: shared_constraints.Constraints = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    user_activity: shared_useractivity.UserActivity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userActivity') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
