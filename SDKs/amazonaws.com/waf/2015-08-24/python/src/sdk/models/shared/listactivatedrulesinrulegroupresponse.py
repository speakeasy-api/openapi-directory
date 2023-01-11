import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activatedrule as shared_activatedrule


@dataclass_json
@dataclasses.dataclass
class ListActivatedRulesInRuleGroupResponse:
    activated_rules: Optional[list[shared_activatedrule.ActivatedRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivatedRules') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
