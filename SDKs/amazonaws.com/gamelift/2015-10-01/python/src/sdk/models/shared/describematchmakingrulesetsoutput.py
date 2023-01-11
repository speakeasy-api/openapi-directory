import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchmakingruleset as shared_matchmakingruleset


@dataclass_json
@dataclasses.dataclass
class DescribeMatchmakingRuleSetsOutput:
    r"""DescribeMatchmakingRuleSetsOutput
    Represents the returned data in response to a request operation.
    """
    
    rule_sets: list[shared_matchmakingruleset.MatchmakingRuleSet] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSets') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
