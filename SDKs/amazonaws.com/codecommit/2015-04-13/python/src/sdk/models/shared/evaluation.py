import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Evaluation:
    r"""Evaluation
    Returns information about the approval rules applied to a pull request and whether conditions have been met.
    """
    
    approval_rules_not_satisfied: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRulesNotSatisfied') }})
    approval_rules_satisfied: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRulesSatisfied') }})
    approved: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    overridden: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridden') }})
    
