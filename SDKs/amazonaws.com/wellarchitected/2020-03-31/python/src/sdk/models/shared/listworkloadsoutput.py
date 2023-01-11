import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workloadsummary as shared_workloadsummary


@dataclass_json
@dataclasses.dataclass
class ListWorkloadsOutput:
    r"""ListWorkloadsOutput
    Output of a list workloads call.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_summaries: Optional[list[shared_workloadsummary.WorkloadSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadSummaries') }})
    
