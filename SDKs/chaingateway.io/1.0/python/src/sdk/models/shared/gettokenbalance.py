import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetTokenBalance:
    balance: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    contractaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    ethereumaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethereumaddress') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    
