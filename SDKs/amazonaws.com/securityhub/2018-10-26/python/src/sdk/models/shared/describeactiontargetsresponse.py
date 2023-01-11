import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontarget as shared_actiontarget


@dataclass_json
@dataclasses.dataclass
class DescribeActionTargetsResponse:
    action_targets: list[shared_actiontarget.ActionTarget] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionTargets') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
