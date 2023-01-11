import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import worldfailure as shared_worldfailure


@dataclass_json
@dataclasses.dataclass
class FailureSummary:
    r"""FailureSummary
    Information about worlds that failed.
    """
    
    failures: Optional[list[shared_worldfailure.WorldFailure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    total_failure_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFailureCount') }})
    
