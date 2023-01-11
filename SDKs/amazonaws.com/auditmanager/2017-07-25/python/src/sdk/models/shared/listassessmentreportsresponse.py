import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentreportmetadata as shared_assessmentreportmetadata


@dataclass_json
@dataclasses.dataclass
class ListAssessmentReportsResponse:
    assessment_reports: Optional[list[shared_assessmentreportmetadata.AssessmentReportMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentReports') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
