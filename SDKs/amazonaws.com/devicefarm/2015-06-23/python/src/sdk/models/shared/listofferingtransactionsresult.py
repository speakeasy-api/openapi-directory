import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offeringtransaction as shared_offeringtransaction


@dataclass_json
@dataclasses.dataclass
class ListOfferingTransactionsResult:
    r"""ListOfferingTransactionsResult
    Returns the transaction log of the specified offerings.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    offering_transactions: Optional[list[shared_offeringtransaction.OfferingTransaction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringTransactions') }})
    
