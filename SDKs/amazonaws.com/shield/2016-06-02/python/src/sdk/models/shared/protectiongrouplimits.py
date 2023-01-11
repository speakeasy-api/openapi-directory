import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiongrouppatterntypelimits as shared_protectiongrouppatterntypelimits


@dataclass_json
@dataclasses.dataclass
class ProtectionGroupLimits:
    r"""ProtectionGroupLimits
    Limits settings on protection groups for your subscription. 
    """
    
    max_protection_groups: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxProtectionGroups') }})
    pattern_type_limits: shared_protectiongrouppatterntypelimits.ProtectionGroupPatternTypeLimits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatternTypeLimits') }})
    
