import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VerifyAccountResponse:
    digilockerid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('digilockerid') }})
    registered: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registered') }})
    
