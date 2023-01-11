import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reviewpolicy as shared_reviewpolicy
from ..shared import hitlayoutparameter as shared_hitlayoutparameter


@dataclass_json
@dataclasses.dataclass
class CreateHitWithHitTypeRequest:
    hit_type_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITTypeId') }})
    lifetime_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifetimeInSeconds') }})
    assignment_review_policy: Optional[shared_reviewpolicy.ReviewPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentReviewPolicy') }})
    hit_layout_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITLayoutId') }})
    hit_layout_parameters: Optional[list[shared_hitlayoutparameter.HitLayoutParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITLayoutParameters') }})
    hit_review_policy: Optional[shared_reviewpolicy.ReviewPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITReviewPolicy') }})
    max_assignments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAssignments') }})
    question: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Question') }})
    requester_annotation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterAnnotation') }})
    unique_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueRequestToken') }})
    
