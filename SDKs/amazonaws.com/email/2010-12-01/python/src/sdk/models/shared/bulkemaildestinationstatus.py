import dataclasses
from typing import Optional
from enum import Enum
from ..shared import bulkemailstatus_enum as shared_bulkemailstatus_enum


@dataclasses.dataclass
class BulkEmailDestinationStatus:
    r"""BulkEmailDestinationStatus
    An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.
    """
    
    error: Optional[str] = dataclasses.field(default=None)
    message_id: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_bulkemailstatus_enum.BulkEmailStatusEnum] = dataclasses.field(default=None)
    
