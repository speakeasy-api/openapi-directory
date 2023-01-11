import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import passwordpolicytype as shared_passwordpolicytype


@dataclass_json
@dataclasses.dataclass
class UserPoolPolicyType:
    r"""UserPoolPolicyType
    The policy associated with a user pool.
    """
    
    password_policy: Optional[shared_passwordpolicytype.PasswordPolicyType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PasswordPolicy') }})
    
