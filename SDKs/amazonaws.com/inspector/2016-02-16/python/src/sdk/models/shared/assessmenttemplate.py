import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute


@dataclass_json
@dataclasses.dataclass
class AssessmentTemplate:
    r"""AssessmentTemplate
    Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    assessment_run_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentRunCount') }})
    assessment_target_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargetArn') }})
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInSeconds') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules_package_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesPackageArns') }})
    user_attributes_for_findings: list[shared_attribute.Attribute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributesForFindings') }})
    last_assessment_run_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAssessmentRunArn') }})
    
