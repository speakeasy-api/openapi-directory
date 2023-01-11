import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stack as shared_stack


@dataclass_json
@dataclasses.dataclass
class UpdateStackResult:
    stack: Optional[shared_stack.Stack] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stack') }})
    
