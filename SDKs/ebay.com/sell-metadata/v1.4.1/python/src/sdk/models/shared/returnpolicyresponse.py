import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import returnpolicy as shared_returnpolicy
from ..shared import error as shared_error


@dataclass_json
@dataclasses.dataclass
class ReturnPolicyResponse:
    return_policies: Optional[list[shared_returnpolicy.ReturnPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPolicies') }})
    warnings: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
