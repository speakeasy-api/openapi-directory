import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulelistlinks as shared_rulelistlinks
from ..shared import rule as shared_rule


@dataclass_json
@dataclasses.dataclass
class RuleList:
    links: shared_rulelistlinks.RuleListLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    rules: list[shared_rule.Rule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
