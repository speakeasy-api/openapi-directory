import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import constraintdetail as shared_constraintdetail
from ..shared import status_enum as shared_status_enum


@dataclass_json
@dataclasses.dataclass
class UpdateConstraintOutput:
    constraint_detail: Optional[shared_constraintdetail.ConstraintDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintDetail') }})
    constraint_parameters: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintParameters') }})
    status: Optional[shared_status_enum.StatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
