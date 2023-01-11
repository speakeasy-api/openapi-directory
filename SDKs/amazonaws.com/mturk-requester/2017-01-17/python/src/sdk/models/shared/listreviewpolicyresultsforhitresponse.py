import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reviewpolicy as shared_reviewpolicy
from ..shared import reviewreport as shared_reviewreport


@dataclass_json
@dataclasses.dataclass
class ListReviewPolicyResultsForHitResponse:
    assignment_review_policy: Optional[shared_reviewpolicy.ReviewPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentReviewPolicy') }})
    assignment_review_report: Optional[shared_reviewreport.ReviewReport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentReviewReport') }})
    hit_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    hit_review_policy: Optional[shared_reviewpolicy.ReviewPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITReviewPolicy') }})
    hit_review_report: Optional[shared_reviewreport.ReviewReport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITReviewReport') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
