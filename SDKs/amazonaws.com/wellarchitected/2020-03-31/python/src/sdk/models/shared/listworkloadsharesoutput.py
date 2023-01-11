import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workloadsharesummary as shared_workloadsharesummary


@dataclass_json
@dataclasses.dataclass
class ListWorkloadSharesOutput:
    r"""ListWorkloadSharesOutput
    Input for List Workload Share
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    workload_share_summaries: Optional[list[shared_workloadsharesummary.WorkloadShareSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadShareSummaries') }})
    
