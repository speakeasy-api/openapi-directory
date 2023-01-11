import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activeviolation as shared_activeviolation


@dataclass_json
@dataclasses.dataclass
class ListActiveViolationsResponse:
    active_violations: Optional[list[shared_activeviolation.ActiveViolation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViolations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
