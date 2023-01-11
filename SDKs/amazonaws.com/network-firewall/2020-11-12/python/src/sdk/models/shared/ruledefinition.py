import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchattributes as shared_matchattributes


@dataclass_json
@dataclasses.dataclass
class RuleDefinition:
    r"""RuleDefinition
    The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
    """
    
    actions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    match_attributes: shared_matchattributes.MatchAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchAttributes') }})
    
