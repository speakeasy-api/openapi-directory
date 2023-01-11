import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IssueJobStatusStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    STARTED = "STARTED"
    RUNNING = "RUNNING"
    FAILURE = "FAILURE"


@dataclass_json
@dataclasses.dataclass
class IssueJobStatus:
    r"""IssueJobStatus
    The status of an import or export job
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    pct: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pct') }})
    phase: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    status: Optional[IssueJobStatusStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
