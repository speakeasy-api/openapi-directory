import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CheckOperationReadStatusEnum(str, Enum):
    SUCCEEDED = "succeeded"
    FAILED = "failed"


@dataclass_json
@dataclasses.dataclass
class CheckOperationRead:
    status: CheckOperationReadStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
