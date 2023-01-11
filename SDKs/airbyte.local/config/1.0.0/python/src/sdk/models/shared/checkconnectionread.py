import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import synchronousjobread as shared_synchronousjobread

class CheckConnectionReadStatusEnum(str, Enum):
    SUCCEEDED = "succeeded"
    FAILED = "failed"


@dataclass_json
@dataclasses.dataclass
class CheckConnectionRead:
    job_info: shared_synchronousjobread.SynchronousJobRead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobInfo') }})
    status: CheckConnectionReadStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
