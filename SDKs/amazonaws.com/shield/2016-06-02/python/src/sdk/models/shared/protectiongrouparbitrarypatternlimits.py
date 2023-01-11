import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProtectionGroupArbitraryPatternLimits:
    r"""ProtectionGroupArbitraryPatternLimits
    Limits settings on protection groups with arbitrary pattern type. 
    """
    
    max_members: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxMembers') }})
    
