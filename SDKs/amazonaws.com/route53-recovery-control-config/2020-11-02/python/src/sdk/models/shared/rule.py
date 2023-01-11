import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assertionrule as shared_assertionrule
from ..shared import gatingrule as shared_gatingrule


@dataclass_json
@dataclasses.dataclass
class Rule:
    r"""Rule
    A safety rule. A safety rule can be an assertion rule or a gating rule.
    """
    
    assertion: Optional[shared_assertionrule.AssertionRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ASSERTION') }})
    gating: Optional[shared_gatingrule.GatingRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GATING') }})
    
