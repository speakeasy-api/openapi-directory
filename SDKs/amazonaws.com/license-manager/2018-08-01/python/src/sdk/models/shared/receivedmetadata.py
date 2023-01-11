import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowedoperation_enum as shared_allowedoperation_enum
from ..shared import receivedstatus_enum as shared_receivedstatus_enum


@dataclass_json
@dataclasses.dataclass
class ReceivedMetadata:
    r"""ReceivedMetadata
    Metadata associated with received licenses and grants.
    """
    
    allowed_operations: Optional[list[shared_allowedoperation_enum.AllowedOperationEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOperations') }})
    received_status: Optional[shared_receivedstatus_enum.ReceivedStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceivedStatus') }})
    received_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceivedStatusReason') }})
    
