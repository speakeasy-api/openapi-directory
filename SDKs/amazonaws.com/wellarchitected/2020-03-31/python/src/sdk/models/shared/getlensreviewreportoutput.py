import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lensreviewreport as shared_lensreviewreport


@dataclass_json
@dataclasses.dataclass
class GetLensReviewReportOutput:
    r"""GetLensReviewReportOutput
    Output of a get lens review report call.
    """
    
    lens_review_report: Optional[shared_lensreviewreport.LensReviewReport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensReviewReport') }})
    milestone_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
