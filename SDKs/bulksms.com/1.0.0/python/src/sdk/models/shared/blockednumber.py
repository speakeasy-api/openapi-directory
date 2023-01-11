import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BlockedNumber:
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    phone_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
