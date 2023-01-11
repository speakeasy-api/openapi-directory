import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identitydescription as shared_identitydescription


@dataclass_json
@dataclasses.dataclass
class ListIdentitiesResponse:
    r"""ListIdentitiesResponse
    The response to a ListIdentities request.
    """
    
    identities: Optional[list[shared_identitydescription.IdentityDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identities') }})
    identity_pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
