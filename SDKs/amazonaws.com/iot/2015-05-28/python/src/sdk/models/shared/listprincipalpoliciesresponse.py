import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policy as shared_policy


@dataclass_json
@dataclasses.dataclass
class ListPrincipalPoliciesResponse:
    r"""ListPrincipalPoliciesResponse
    The output from the ListPrincipalPolicies operation.
    """
    
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextMarker') }})
    policies: Optional[list[shared_policy.Policy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
