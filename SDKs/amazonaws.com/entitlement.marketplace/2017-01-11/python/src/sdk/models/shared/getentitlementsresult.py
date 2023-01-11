import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitlement as shared_entitlement


@dataclass_json
@dataclasses.dataclass
class GetEntitlementsResult:
    r"""GetEntitlementsResult
    The GetEntitlementsRequest contains results from the GetEntitlements operation.
    """
    
    entitlements: Optional[list[shared_entitlement.Entitlement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entitlements') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
