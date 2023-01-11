import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ListAssessmentRunsResponse:
    assessment_run_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunArns') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
