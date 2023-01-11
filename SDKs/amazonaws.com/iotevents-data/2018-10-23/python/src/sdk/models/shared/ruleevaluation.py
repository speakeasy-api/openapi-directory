import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simpleruleevaluation as shared_simpleruleevaluation


@dataclass_json
@dataclasses.dataclass
class RuleEvaluation:
    r"""RuleEvaluation
    Information needed to evaluate data.
    """
    
    simple_rule_evaluation: Optional[shared_simpleruleevaluation.SimpleRuleEvaluation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleRuleEvaluation') }})
    
