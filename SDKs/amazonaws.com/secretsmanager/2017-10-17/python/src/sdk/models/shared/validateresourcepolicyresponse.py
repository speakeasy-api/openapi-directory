import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validationerrorsentry as shared_validationerrorsentry


@dataclass_json
@dataclasses.dataclass
class ValidateResourcePolicyResponse:
    policy_validation_passed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyValidationPassed') }})
    validation_errors: Optional[list[shared_validationerrorsentry.ValidationErrorsEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    
