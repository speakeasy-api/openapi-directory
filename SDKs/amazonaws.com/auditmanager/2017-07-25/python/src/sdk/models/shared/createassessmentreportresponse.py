import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentreport as shared_assessmentreport


@dataclass_json
@dataclasses.dataclass
class CreateAssessmentReportResponse:
    assessment_report: Optional[shared_assessmentreport.AssessmentReport] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentReport') }})
    
