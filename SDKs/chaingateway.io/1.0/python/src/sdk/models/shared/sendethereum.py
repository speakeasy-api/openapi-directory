import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SendEthereum:
    amount: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    from_: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    to: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    txid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txid') }})
    
