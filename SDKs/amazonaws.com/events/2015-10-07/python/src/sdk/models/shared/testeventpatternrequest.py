import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TestEventPatternRequest:
    event: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Event') }})
    event_pattern: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventPattern') }})
    
