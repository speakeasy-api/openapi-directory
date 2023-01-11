import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartAssessmentRunRequest:
    assessment_template_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTemplateArn') }})
    assessment_run_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunName') }})
    
