import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bulkemailstatus_enum as shared_bulkemailstatus_enum


@dataclass_json
@dataclasses.dataclass
class BulkEmailEntryResult:
    r"""BulkEmailEntryResult
    The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.
    """
    
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    message_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageId') }})
    status: Optional[shared_bulkemailstatus_enum.BulkEmailStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
