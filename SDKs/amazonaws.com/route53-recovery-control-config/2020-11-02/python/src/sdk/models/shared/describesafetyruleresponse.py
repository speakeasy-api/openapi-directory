import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assertionrule as shared_assertionrule
from ..shared import gatingrule as shared_gatingrule


@dataclass_json
@dataclasses.dataclass
class DescribeSafetyRuleResponse:
    assertion_rule: Optional[shared_assertionrule.AssertionRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssertionRule') }})
    gating_rule: Optional[shared_gatingrule.GatingRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatingRule') }})
    
