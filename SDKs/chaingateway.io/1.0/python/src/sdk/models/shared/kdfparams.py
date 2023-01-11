import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Kdfparams:
    dklen: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dklen') }})
    n: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('n') }})
    p: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('p') }})
    r: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('r') }})
    salt: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('salt') }})
    
