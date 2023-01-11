import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachedmanagedpolicy as shared_attachedmanagedpolicy


@dataclass_json
@dataclasses.dataclass
class ListManagedPoliciesInPermissionSetResponse:
    attached_managed_policies: Optional[list[shared_attachedmanagedpolicy.AttachedManagedPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedManagedPolicies') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
