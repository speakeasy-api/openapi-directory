import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identitypoolshortdescription as shared_identitypoolshortdescription


@dataclass_json
@dataclasses.dataclass
class ListIdentityPoolsResponse:
    r"""ListIdentityPoolsResponse
    The result of a successful ListIdentityPools action.
    """
    
    identity_pools: Optional[list[shared_identitypoolshortdescription.IdentityPoolShortDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPools') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
