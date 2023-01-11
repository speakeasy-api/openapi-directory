import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reviewpolicy as shared_reviewpolicy
from ..shared import hitlayoutparameter as shared_hitlayoutparameter
from ..shared import qualificationrequirement as shared_qualificationrequirement


@dataclass_json
@dataclasses.dataclass
class CreateHitRequest:
    assignment_duration_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentDurationInSeconds') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    lifetime_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifetimeInSeconds') }})
    reward: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reward') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    assignment_review_policy: Optional[shared_reviewpolicy.ReviewPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentReviewPolicy') }})
    auto_approval_delay_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoApprovalDelayInSeconds') }})
    hit_layout_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITLayoutId') }})
    hit_layout_parameters: Optional[list[shared_hitlayoutparameter.HitLayoutParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITLayoutParameters') }})
    hit_review_policy: Optional[shared_reviewpolicy.ReviewPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITReviewPolicy') }})
    keywords: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keywords') }})
    max_assignments: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAssignments') }})
    qualification_requirements: Optional[list[shared_qualificationrequirement.QualificationRequirement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationRequirements') }})
    question: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Question') }})
    requester_annotation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterAnnotation') }})
    unique_request_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueRequestToken') }})
    
