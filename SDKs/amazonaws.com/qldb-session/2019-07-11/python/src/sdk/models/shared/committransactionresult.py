import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import iousage as shared_iousage
from ..shared import timinginformation as shared_timinginformation


@dataclass_json
@dataclasses.dataclass
class CommitTransactionResult:
    r"""CommitTransactionResult
    Contains the details of the committed transaction.
    """
    
    commit_digest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitDigest') }})
    consumed_i_os: Optional[shared_iousage.IoUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedIOs') }})
    timing_information: Optional[shared_timinginformation.TimingInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    transaction_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    
