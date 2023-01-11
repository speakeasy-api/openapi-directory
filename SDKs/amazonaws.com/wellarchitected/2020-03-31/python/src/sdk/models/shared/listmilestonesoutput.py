import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import milestonesummary as shared_milestonesummary


@dataclass_json
@dataclasses.dataclass
class ListMilestonesOutput:
    r"""ListMilestonesOutput
    Output of a list milestones call.
    """
    
    milestone_summaries: Optional[list[shared_milestonesummary.MilestoneSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
