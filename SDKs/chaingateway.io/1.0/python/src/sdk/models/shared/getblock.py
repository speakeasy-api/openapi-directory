import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetBlock:
    block_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_number') }})
    difficulty: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('difficulty') }})
    gas_limit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gas_limit') }})
    gas_used: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gas_used') }})
    hash: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    miner: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('miner') }})
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    parent_hash: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_hash') }})
    size_in_bytes: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_in_bytes') }})
    time_stamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_stamp') }})
    transactions_count: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions_count') }})
    
