import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiongrouparbitrarypatternlimits as shared_protectiongrouparbitrarypatternlimits


@dataclass_json
@dataclasses.dataclass
class ProtectionGroupPatternTypeLimits:
    r"""ProtectionGroupPatternTypeLimits
    Limits settings by pattern type in the protection groups for your subscription. 
    """
    
    arbitrary_pattern_limits: shared_protectiongrouparbitrarypatternlimits.ProtectionGroupArbitraryPatternLimits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArbitraryPatternLimits') }})
    
