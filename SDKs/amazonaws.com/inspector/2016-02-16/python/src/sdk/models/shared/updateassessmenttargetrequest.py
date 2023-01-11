import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateAssessmentTargetRequest:
    assessment_target_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargetArn') }})
    assessment_target_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentTargetName') }})
    resource_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroupArn') }})
    
