import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identitypoolusage as shared_identitypoolusage


@dataclass_json
@dataclasses.dataclass
class ListIdentityPoolUsageResponse:
    r"""ListIdentityPoolUsageResponse
    Returned for a successful ListIdentityPoolUsage request.
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    identity_pool_usages: Optional[list[shared_identitypoolusage.IdentityPoolUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolUsages') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
