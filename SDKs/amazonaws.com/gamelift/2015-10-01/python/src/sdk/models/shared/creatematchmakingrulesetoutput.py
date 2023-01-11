import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchmakingruleset as shared_matchmakingruleset


@dataclass_json
@dataclasses.dataclass
class CreateMatchmakingRuleSetOutput:
    r"""CreateMatchmakingRuleSetOutput
    Represents the returned data in response to a request operation.
    """
    
    rule_set: shared_matchmakingruleset.MatchmakingRuleSet = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSet') }})
    
