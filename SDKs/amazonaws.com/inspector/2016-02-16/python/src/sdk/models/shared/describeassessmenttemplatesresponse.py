import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmenttemplate as shared_assessmenttemplate
from ..shared import faileditemdetails as shared_faileditemdetails


@dataclass_json
@dataclasses.dataclass
class DescribeAssessmentTemplatesResponse:
    assessment_templates: list[shared_assessmenttemplate.AssessmentTemplate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTemplates') }})
    failed_items: dict[str, shared_faileditemdetails.FailedItemDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedItems') }})
    
