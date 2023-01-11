import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userpooldescriptiontype as shared_userpooldescriptiontype


@dataclass_json
@dataclasses.dataclass
class ListUserPoolsResponse:
    r"""ListUserPoolsResponse
    Represents the response to list user pools.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    user_pools: Optional[list[shared_userpooldescriptiontype.UserPoolDescriptionType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPools') }})
    
