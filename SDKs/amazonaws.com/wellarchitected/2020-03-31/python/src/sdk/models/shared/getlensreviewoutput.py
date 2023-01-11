import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lensreview as shared_lensreview


@dataclass_json
@dataclasses.dataclass
class GetLensReviewOutput:
    r"""GetLensReviewOutput
    Output of a get lens review call.
    """
    
    lens_review: Optional[shared_lensreview.LensReview] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensReview') }})
    milestone_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
