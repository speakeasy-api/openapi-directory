import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import limit as shared_limit


@dataclass_json
@dataclasses.dataclass
class ProtectionLimits:
    r"""ProtectionLimits
    Limits settings on protections for your subscription. 
    """
    
    protected_resource_type_limits: list[shared_limit.Limit] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectedResourceTypeLimits') }})
    
