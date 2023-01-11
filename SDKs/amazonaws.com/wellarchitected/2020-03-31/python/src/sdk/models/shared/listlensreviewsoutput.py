import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lensreviewsummary as shared_lensreviewsummary


@dataclass_json
@dataclasses.dataclass
class ListLensReviewsOutput:
    r"""ListLensReviewsOutput
    Output of a list lens reviews call.
    """
    
    lens_review_summaries: Optional[list[shared_lensreviewsummary.LensReviewSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensReviewSummaries') }})
    milestone_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
