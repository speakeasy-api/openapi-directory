import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetToken:
    contractaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractaddress') }})
    decimals: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimals') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    supply: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supply') }})
    symbol: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    
