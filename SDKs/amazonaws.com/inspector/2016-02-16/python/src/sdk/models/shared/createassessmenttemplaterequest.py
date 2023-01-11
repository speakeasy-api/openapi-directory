import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute


@dataclass_json
@dataclasses.dataclass
class CreateAssessmentTemplateRequest:
    assessment_target_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargetArn') }})
    assessment_template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTemplateName') }})
    duration_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInSeconds') }})
    rules_package_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    user_attributes_for_findings: Optional[list[shared_attribute.Attribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributesForFindings') }})
    
