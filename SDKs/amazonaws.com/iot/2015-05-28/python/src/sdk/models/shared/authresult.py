import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowed as shared_allowed
from ..shared import authdecision_enum as shared_authdecision_enum
from ..shared import authinfo as shared_authinfo
from ..shared import denied as shared_denied


@dataclass_json
@dataclasses.dataclass
class AuthResult:
    r"""AuthResult
    The authorizer result.
    """
    
    allowed: Optional[shared_allowed.Allowed] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed') }})
    auth_decision: Optional[shared_authdecision_enum.AuthDecisionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authDecision') }})
    auth_info: Optional[shared_authinfo.AuthInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authInfo') }})
    denied: Optional[shared_denied.Denied] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denied') }})
    missing_context_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missingContextValues') }})
    
