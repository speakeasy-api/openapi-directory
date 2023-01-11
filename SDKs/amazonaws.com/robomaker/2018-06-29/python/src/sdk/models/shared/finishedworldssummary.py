import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import failuresummary as shared_failuresummary


@dataclass_json
@dataclasses.dataclass
class FinishedWorldsSummary:
    r"""FinishedWorldsSummary
    Information about worlds that finished.
    """
    
    failure_summary: Optional[shared_failuresummary.FailureSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureSummary') }})
    finished_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishedCount') }})
    succeeded_worlds: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeededWorlds') }})
    
