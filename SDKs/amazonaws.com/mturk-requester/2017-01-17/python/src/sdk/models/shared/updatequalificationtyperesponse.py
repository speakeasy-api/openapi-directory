import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import qualificationtype as shared_qualificationtype


@dataclass_json
@dataclasses.dataclass
class UpdateQualificationTypeResponse:
    qualification_type: Optional[shared_qualificationtype.QualificationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationType') }})
    
