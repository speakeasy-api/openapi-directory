import dataclasses
from ..shared import passwordpolicy as shared_passwordpolicy


@dataclasses.dataclass
class GetAccountPasswordPolicyResponse:
    r"""GetAccountPasswordPolicyResponse
    Contains the response to a successful <a>GetAccountPasswordPolicy</a> request. 
    """
    
    password_policy: shared_passwordpolicy.PasswordPolicy = dataclasses.field()
    
