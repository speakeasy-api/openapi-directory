import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StatelessRuleGroupReference:
    r"""StatelessRuleGroupReference
    Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group. 
    """
    
    priority: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    
