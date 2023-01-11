import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ParticipationStats:
    all: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    owner: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    
