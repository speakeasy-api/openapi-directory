import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImportAddress:
    ethaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethaddress') }})
    filename: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
