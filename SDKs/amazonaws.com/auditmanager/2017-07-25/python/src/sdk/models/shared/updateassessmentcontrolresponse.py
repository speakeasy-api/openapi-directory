import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assessmentcontrol as shared_assessmentcontrol


@dataclass_json
@dataclasses.dataclass
class UpdateAssessmentControlResponse:
    control: Optional[shared_assessmentcontrol.AssessmentControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('control') }})
    
