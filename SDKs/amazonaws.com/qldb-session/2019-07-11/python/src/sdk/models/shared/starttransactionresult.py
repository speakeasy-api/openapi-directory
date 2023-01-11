import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timinginformation as shared_timinginformation


@dataclass_json
@dataclasses.dataclass
class StartTransactionResult:
    r"""StartTransactionResult
    Contains the details of the started transaction.
    """
    
    timing_information: Optional[shared_timinginformation.TimingInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    
