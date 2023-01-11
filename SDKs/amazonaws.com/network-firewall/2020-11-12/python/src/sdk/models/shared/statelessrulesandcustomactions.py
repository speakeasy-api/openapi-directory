import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customaction as shared_customaction
from ..shared import statelessrule as shared_statelessrule


@dataclass_json
@dataclasses.dataclass
class StatelessRulesAndCustomActions:
    r"""StatelessRulesAndCustomActions
    Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules. 
    """
    
    stateless_rules: list[shared_statelessrule.StatelessRule] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatelessRules') }})
    custom_actions: Optional[list[shared_customaction.CustomAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomActions') }})
    
