import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ruledefinition as shared_ruledefinition


@dataclass_json
@dataclasses.dataclass
class StatelessRule:
    r"""StatelessRule
    A single stateless rule. This is used in <a>StatelessRulesAndCustomActions</a>.
    """
    
    priority: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    rule_definition: shared_ruledefinition.RuleDefinition = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleDefinition') }})
    
