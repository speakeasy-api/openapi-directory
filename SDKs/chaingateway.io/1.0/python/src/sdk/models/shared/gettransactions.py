import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transaction as shared_transaction


@dataclass_json
@dataclasses.dataclass
class GetTransactions:
    ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    transactions: list[shared_transaction.Transaction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    
