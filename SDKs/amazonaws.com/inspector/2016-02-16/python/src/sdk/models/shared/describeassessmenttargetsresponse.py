import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmenttarget as shared_assessmenttarget
from ..shared import faileditemdetails as shared_faileditemdetails


@dataclass_json
@dataclasses.dataclass
class DescribeAssessmentTargetsResponse:
    assessment_targets: list[shared_assessmenttarget.AssessmentTarget] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargets') }})
    failed_items: dict[str, shared_faileditemdetails.FailedItemDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    
