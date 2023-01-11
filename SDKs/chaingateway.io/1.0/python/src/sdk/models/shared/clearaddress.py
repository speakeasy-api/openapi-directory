import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ClearAddress:
    amount: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    ethereumaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ethereumaddress') }})
    gas: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gas') }})
    newaddress: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newaddress') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    total: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    txid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txid') }})
    
