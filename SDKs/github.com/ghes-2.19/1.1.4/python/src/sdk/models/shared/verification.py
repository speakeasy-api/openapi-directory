import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Verification:
    payload: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    signature: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    verified: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
