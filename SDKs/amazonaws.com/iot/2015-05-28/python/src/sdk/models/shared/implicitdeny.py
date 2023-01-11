import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policy as shared_policy


@dataclass_json
@dataclasses.dataclass
class ImplicitDeny:
    r"""ImplicitDeny
    Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
    """
    
    policies: Optional[list[shared_policy.Policy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
