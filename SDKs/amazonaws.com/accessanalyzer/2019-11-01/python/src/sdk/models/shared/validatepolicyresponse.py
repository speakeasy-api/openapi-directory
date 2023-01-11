import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import validatepolicyfinding as shared_validatepolicyfinding


@dataclass_json
@dataclasses.dataclass
class ValidatePolicyResponse:
    findings: list[shared_validatepolicyfinding.ValidatePolicyFinding] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
