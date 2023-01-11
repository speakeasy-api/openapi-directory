import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validationerror as shared_validationerror


@dataclass_json
@dataclasses.dataclass
class ValidateSecurityProfileBehaviorsResponse:
    valid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    validation_errors: Optional[list[shared_validationerror.ValidationError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationErrors') }})
    
