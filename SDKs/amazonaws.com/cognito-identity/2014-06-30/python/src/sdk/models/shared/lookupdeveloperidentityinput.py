import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LookupDeveloperIdentityInput:
    r"""LookupDeveloperIdentityInput
    Input to the <code>LookupDeveloperIdentityInput</code> action.
    """
    
    identity_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    developer_user_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeveloperUserIdentifier') }})
    identity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
