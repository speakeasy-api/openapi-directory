import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentrun as shared_assessmentrun
from ..shared import faileditemdetails as shared_faileditemdetails


@dataclass_json
@dataclasses.dataclass
class DescribeAssessmentRunsResponse:
    assessment_runs: list[shared_assessmentrun.AssessmentRun] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRuns') }})
    failed_items: dict[str, shared_faileditemdetails.FailedItemDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    
