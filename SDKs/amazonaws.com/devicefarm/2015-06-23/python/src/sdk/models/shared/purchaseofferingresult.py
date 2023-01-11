import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import offeringtransaction as shared_offeringtransaction


@dataclass_json
@dataclasses.dataclass
class PurchaseOfferingResult:
    r"""PurchaseOfferingResult
    The result of the purchase offering (for example, success or failure).
    """
    
    offering_transaction: Optional[shared_offeringtransaction.OfferingTransaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringTransaction') }})
    
