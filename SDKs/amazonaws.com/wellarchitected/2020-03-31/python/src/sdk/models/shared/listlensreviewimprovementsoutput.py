import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import improvementsummary as shared_improvementsummary


@dataclass_json
@dataclasses.dataclass
class ListLensReviewImprovementsOutput:
    r"""ListLensReviewImprovementsOutput
    Output of a list lens review improvements call.
    """
    
    improvement_summaries: Optional[list[shared_improvementsummary.ImprovementSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImprovementSummaries') }})
    lens_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    milestone_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
