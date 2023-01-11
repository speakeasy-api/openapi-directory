import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiongrouplimits as shared_protectiongrouplimits
from ..shared import protectionlimits as shared_protectionlimits


@dataclass_json
@dataclasses.dataclass
class SubscriptionLimits:
    r"""SubscriptionLimits
    Limits settings for your subscription. 
    """
    
    protection_group_limits: shared_protectiongrouplimits.ProtectionGroupLimits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroupLimits') }})
    protection_limits: shared_protectionlimits.ProtectionLimits = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionLimits') }})
    
