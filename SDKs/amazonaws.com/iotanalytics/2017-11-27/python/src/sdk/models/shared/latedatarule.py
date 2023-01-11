import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import latedataruleconfiguration as shared_latedataruleconfiguration


@dataclass_json
@dataclasses.dataclass
class LateDataRule:
    r"""LateDataRule
    A structure that contains the name and configuration information of a late data rule.
    """
    
    rule_configuration: shared_latedataruleconfiguration.LateDataRuleConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleConfiguration') }})
    rule_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleName') }})
    
