import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Queue:
    max_length: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLength') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    ttl: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
