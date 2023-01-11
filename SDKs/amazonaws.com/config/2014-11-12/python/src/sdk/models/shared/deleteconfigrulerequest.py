import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteConfigRuleRequest:
    r"""DeleteConfigRuleRequest
    <p/>
    """
    
    config_rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    
