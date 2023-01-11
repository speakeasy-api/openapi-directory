import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulegroup as shared_rulegroup


@dataclass_json
@dataclasses.dataclass
class GetRuleGroupResponse:
    rule_group: Optional[shared_rulegroup.RuleGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroup') }})
    
