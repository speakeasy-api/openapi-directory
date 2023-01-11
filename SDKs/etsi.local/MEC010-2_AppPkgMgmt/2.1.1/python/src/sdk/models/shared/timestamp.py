import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TimeStamp:
    nano_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nanoSeconds') }})
    seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
