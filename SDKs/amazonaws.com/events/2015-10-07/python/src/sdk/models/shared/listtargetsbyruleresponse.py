import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import target as shared_target


@dataclass_json
@dataclasses.dataclass
class ListTargetsByRuleResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    targets: Optional[list[shared_target.Target]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
