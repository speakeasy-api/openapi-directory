import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitlementusage as shared_entitlementusage


@dataclass_json
@dataclasses.dataclass
class LicenseUsage:
    r"""LicenseUsage
    Describes the entitlement usage associated with a license.
    """
    
    entitlement_usages: Optional[list[shared_entitlementusage.EntitlementUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntitlementUsages') }})
    
