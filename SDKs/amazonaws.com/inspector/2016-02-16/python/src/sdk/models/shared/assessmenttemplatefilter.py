import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import durationrange as shared_durationrange


@dataclass_json
@dataclasses.dataclass
class AssessmentTemplateFilter:
    r"""AssessmentTemplateFilter
    Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
    """
    
    duration_range: Optional[shared_durationrange.DurationRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationRange') }})
    name_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namePattern') }})
    rules_package_arns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    
