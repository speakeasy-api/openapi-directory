import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import milestone as shared_milestone


@dataclass_json
@dataclasses.dataclass
class GetMilestoneOutput:
    r"""GetMilestoneOutput
    Output of a get milestone call.
    """
    
    milestone: Optional[shared_milestone.Milestone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Milestone') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
